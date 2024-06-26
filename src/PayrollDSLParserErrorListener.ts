import { ErrorListener, RecognitionException, Recognizer, Token } from 'antlr4';

type ErrorArgs = {
  error?: RecognitionException;
  offendingSymbol: Token;
  line: number;
  message: string;
};

export default class PayrollDSLParserErrorListener extends ErrorListener<Token> {
  private _onError?: (args: ErrorArgs) => void;

  constructor(_onError?: (args: ErrorArgs) => void) {
    super();
    this._onError = _onError;
  }

  syntaxError(
    recognizer: Recognizer<Token>,
    offendingSymbol: Token,
    line: number,
    charPositionInLine: number,
    message: string,
    error?: RecognitionException
  ): void {
    this._onError?.({ error, offendingSymbol, line, message });
    throw new Error(`line ${line}:${charPositionInLine} ${message}`);
  }
}
