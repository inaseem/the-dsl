import { CharStreams, CommonTokenStream } from 'antlr4';
import * as monaco from 'monaco-editor';
import FormulaExpressionsLexer from './grammar/FormulaExpressionsLexer';
import FormulaExpressionsParser from './grammar/FormulaExpressionsParser';

export class AntlrDiagnosticsAdapter {
  private _editor: monaco.editor.IStandaloneCodeEditor;
  private _languageId: string;

  constructor(editor: monaco.editor.IStandaloneCodeEditor, languageId: string) {
    this._editor = editor;
    this._languageId = languageId;

    this._editor.onDidChangeModelContent(() => {
      this._validate();
    });

    this._validate(); // Initial validation
  }

  private _validate(): void {
    const model = this._editor.getModel();

    if (!model) {
      return;
    }
    if (model.getLanguageId() !== this._languageId) {
      return;
    }

    const code = model.getValue();
    const errors = this._validateCode(code);

    const markers = errors.map((error) => ({
      startLineNumber: error.line,
      startColumn: error.startColumn,
      endLineNumber: error.line,
      endColumn: error.endColumn,
      message: error.message,
      severity: monaco.MarkerSeverity.Error,
    }));

    monaco.editor.setModelMarkers(model, this._languageId, markers);
  }

  private _validateCode(code: string): Array<{
    line: number;
    startColumn: number;
    endColumn: number;
    message: string;
  }> {
    const inputStream = CharStreams.fromString(code);
    const lexer = new FormulaExpressionsLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new FormulaExpressionsParser(tokenStream);
    parser.buildParseTrees = true;

    const errors: {
      line: number;
      startColumn: number;
      endColumn: number;
      message: string;
    }[] = [];

    // Collect syntax errors from lexer and parser
    lexer.removeErrorListeners();
    lexer.addErrorListener({
      syntaxError(
        recognizer,
        offendingSymbol,
        line,
        charPositionInLine,
        msg,
        e
      ) {
        const errorToken = lexer.emit();
        const message = `Unrecognized token: ${msg}`;
        errors.push({
          line,
          startColumn: errorToken.start + 1,
          endColumn: errorToken.stop + 3,
          message,
        });
      },
    });

    parser.removeErrorListeners();
    parser.addErrorListener({
      syntaxError(
        recognizer,
        offendingSymbol,
        line,
        charPositionInLine,
        msg,
        e
      ) {
        const message = `Parse error: ${msg}`;
        if (errors.length > 0) return;
        errors.push({
          line,
          startColumn: offendingSymbol.start + 1,
          endColumn: offendingSymbol.stop + 2,
          message,
        });
      },
    });

    // Parse the code (e.g., starting from the top rule)
    try {
      parser.formula();
    } catch (e) {
      console.log(e);
    }
    return errors;
  }
}
