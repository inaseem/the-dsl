import { ErrorListener, RecognitionException, Recognizer } from 'antlr4';

type ErrorArgs = {
  error: RecognitionException;
  offendingSymbol: number;
  line: number;
  message: string;
};

export default class PayrollDSLLexerErrorListener extends ErrorListener<number> {
  private _onError?: (args: ErrorArgs) => void;

  constructor(_onError?: (args: ErrorArgs) => void) {
    super();
    this._onError = _onError;
  }

  syntaxError(
    recognizer: Recognizer<number>,
    offendingSymbol: number,
    line: number,
    charPositionInLine: number,
    message: string,
    error: RecognitionException
  ): void {
    this._onError?.({ error, offendingSymbol, line, message });
    throw new Error(`line ${line}:${charPositionInLine} ${message}`);
  }
}
