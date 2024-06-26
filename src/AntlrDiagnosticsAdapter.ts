import { CharStreams, CommonTokenStream } from 'antlr4';
import * as monaco from 'monaco-editor';
import PayrollDSLLexer from './grammar/PayrollDSLLexer';
import PayrollDSLParser from './grammar/PayrollDSLParser';
import PayrollDSLParserErrorListener from './PayrollDSLParserErrorListener';
import PayrollDSLLexerErrorListener from './PayrollDSLLexerErrorListener';

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
    const lexer = new PayrollDSLLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new PayrollDSLParser(tokenStream);
    parser.buildParseTrees = true;

    const errors: {
      line: number;
      startColumn: number;
      endColumn: number;
      message: string;
    }[] = [];

    // Collect syntax errors from lexer and parser
    lexer.removeErrorListeners();
    lexer.addErrorListener(
      new PayrollDSLLexerErrorListener(({ error, line, message }) => {
        const errorToken = lexer.emit();
        const errorMessage = `Unrecognized token: ${message}`;
        errors.push({
          line,
          startColumn: errorToken.start + 1,
          endColumn: errorToken.stop + 3,
          message: errorMessage,
        });
      })
    );

    parser.removeErrorListeners();
    parser.addErrorListener(
      new PayrollDSLParserErrorListener(
        ({ error, offendingSymbol, line, message }) => {
          const errorMessage = `Parse error: ${message}`;
          if (errors.length > 0) return;
          errors.push({
            line,
            startColumn: offendingSymbol.start + 1,
            endColumn: offendingSymbol.stop + 2,
            message: errorMessage,
          });
        }
      )
    );

    // Parse the code (e.g., starting from the top rule)
    try {
      parser.formula();
    } catch (e) {
      console.error(e);
    }
    return errors;
  }
}
