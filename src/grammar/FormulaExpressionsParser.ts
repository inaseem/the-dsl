// Generated from grammar/FormulaExpressions.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import FormulaExpressionsListener from "./FormulaExpressionsListener.js";
import FormulaExpressionsVisitor from "./FormulaExpressionsVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class FormulaExpressionsParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly NUMBER = 30;
	public static readonly WS = 31;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_formula = 0;
	public static readonly RULE_expression = 1;
	public static readonly RULE_functionCall = 2;
	public static readonly RULE_functionName = 3;
	public static readonly RULE_lhs = 4;
	public static readonly RULE_literal = 5;
	public static readonly RULE_constant = 6;
	public static readonly RULE_boolean = 7;
	public static readonly literalNames: (string | null)[] = [ null, "'*'", 
                                                            "'/'", "'+'", 
                                                            "'-'", "'<'", 
                                                            "'>'", "'<='", 
                                                            "'>='", "'='", 
                                                            "'<>'", "'('", 
                                                            "')'", "'?'", 
                                                            "':'", "','", 
                                                            "'SUM'", "'IF'", 
                                                            "'MAX'", "'MIN'", 
                                                            "'ROUND'", "'BASIC'", 
                                                            "'HRA'", "'DA'", 
                                                            "'PF'", "'ESIC'", 
                                                            "'PT'", "'LTA'", 
                                                            "'TRUE'", "'FALSE'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "NUMBER", "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"formula", "expression", "functionCall", "functionName", "lhs", "literal", 
		"constant", "boolean",
	];
	public get grammarFileName(): string { return "FormulaExpressions.g4"; }
	public get literalNames(): (string | null)[] { return FormulaExpressionsParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return FormulaExpressionsParser.symbolicNames; }
	public get ruleNames(): string[] { return FormulaExpressionsParser.ruleNames; }
	public get serializedATN(): number[] { return FormulaExpressionsParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, FormulaExpressionsParser._ATN, FormulaExpressionsParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public formula(): FormulaContext {
		let localctx: FormulaContext = new FormulaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, FormulaExpressionsParser.RULE_formula);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 16;
			this.expression(0);
			this.state = 17;
			this.match(FormulaExpressionsParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ExpressionContext = localctx;
		let _startState: number = 2;
		this.enterRecursionRule(localctx, 2, FormulaExpressionsParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 26;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 16:
			case 17:
			case 18:
			case 19:
			case 20:
				{
				this.state = 20;
				this.functionCall();
				}
				break;
			case 21:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 30:
				{
				this.state = 21;
				this.literal();
				}
				break;
			case 11:
				{
				this.state = 22;
				this.match(FormulaExpressionsParser.T__10);
				this.state = 23;
				this.expression(0);
				this.state = 24;
				this.match(FormulaExpressionsParser.T__11);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 47;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 45;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
					case 1:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, FormulaExpressionsParser.RULE_expression);
						this.state = 28;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 29;
						localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 30) !== 0))) {
						    localctx._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 30;
						this.expression(7);
						}
						break;
					case 2:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, FormulaExpressionsParser.RULE_expression);
						this.state = 31;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 32;
						localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 2016) !== 0))) {
						    localctx._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 33;
						this.expression(6);
						}
						break;
					case 3:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, FormulaExpressionsParser.RULE_expression);
						this.state = 34;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 35;
						this.match(FormulaExpressionsParser.T__12);
						this.state = 38;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case 16:
						case 17:
						case 18:
						case 19:
						case 20:
						case 21:
						case 22:
						case 23:
						case 24:
						case 25:
						case 26:
						case 27:
						case 30:
							{
							this.state = 36;
							this.lhs();
							}
							break;
						case 28:
						case 29:
							{
							this.state = 37;
							this.boolean_();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 40;
						this.match(FormulaExpressionsParser.T__13);
						this.state = 43;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case 16:
						case 17:
						case 18:
						case 19:
						case 20:
						case 21:
						case 22:
						case 23:
						case 24:
						case 25:
						case 26:
						case 27:
						case 30:
							{
							this.state = 41;
							this.lhs();
							}
							break;
						case 28:
						case 29:
							{
							this.state = 42;
							this.boolean_();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						break;
					}
					}
				}
				this.state = 49;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let localctx: FunctionCallContext = new FunctionCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, FormulaExpressionsParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 50;
			this.functionName();
			this.state = 51;
			this.match(FormulaExpressionsParser.T__10);
			this.state = 60;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1342113792) !== 0)) {
				{
				this.state = 52;
				this.expression(0);
				this.state = 57;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===15) {
					{
					{
					this.state = 53;
					this.match(FormulaExpressionsParser.T__14);
					this.state = 54;
					this.expression(0);
					}
					}
					this.state = 59;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 62;
			this.match(FormulaExpressionsParser.T__11);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionName(): FunctionNameContext {
		let localctx: FunctionNameContext = new FunctionNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, FormulaExpressionsParser.RULE_functionName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 64;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 2031616) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lhs(): LhsContext {
		let localctx: LhsContext = new LhsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, FormulaExpressionsParser.RULE_lhs);
		try {
			this.state = 68;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 21:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 30:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 66;
				this.literal();
				}
				break;
			case 16:
			case 17:
			case 18:
			case 19:
			case 20:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 67;
				this.functionCall();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let localctx: LiteralContext = new LiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, FormulaExpressionsParser.RULE_literal);
		try {
			this.state = 72;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 30:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 70;
				this.match(FormulaExpressionsParser.NUMBER);
				}
				break;
			case 21:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 71;
				this.constant();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public constant(): ConstantContext {
		let localctx: ConstantContext = new ConstantContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, FormulaExpressionsParser.RULE_constant);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 74;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 266338304) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public boolean_(): BooleanContext {
		let localctx: BooleanContext = new BooleanContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, FormulaExpressionsParser.RULE_boolean);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 76;
			_la = this._input.LA(1);
			if(!(_la===28 || _la===29)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.expression_sempred(localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);
		case 1:
			return this.precpred(this._ctx, 5);
		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,31,79,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,3,1,27,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,3,1,39,8,1,1,1,1,1,1,1,3,1,44,8,1,5,1,46,8,1,10,1,12,1,49,9,1,1,2,1,2,
	1,2,1,2,1,2,5,2,56,8,2,10,2,12,2,59,9,2,3,2,61,8,2,1,2,1,2,1,3,1,3,1,4,
	1,4,3,4,69,8,4,1,5,1,5,3,5,73,8,5,1,6,1,6,1,7,1,7,1,7,0,1,2,8,0,2,4,6,8,
	10,12,14,0,5,1,0,1,4,1,0,5,10,1,0,16,20,1,0,21,27,1,0,28,29,81,0,16,1,0,
	0,0,2,26,1,0,0,0,4,50,1,0,0,0,6,64,1,0,0,0,8,68,1,0,0,0,10,72,1,0,0,0,12,
	74,1,0,0,0,14,76,1,0,0,0,16,17,3,2,1,0,17,18,5,0,0,1,18,1,1,0,0,0,19,20,
	6,1,-1,0,20,27,3,4,2,0,21,27,3,10,5,0,22,23,5,11,0,0,23,24,3,2,1,0,24,25,
	5,12,0,0,25,27,1,0,0,0,26,19,1,0,0,0,26,21,1,0,0,0,26,22,1,0,0,0,27,47,
	1,0,0,0,28,29,10,6,0,0,29,30,7,0,0,0,30,46,3,2,1,7,31,32,10,5,0,0,32,33,
	7,1,0,0,33,46,3,2,1,6,34,35,10,1,0,0,35,38,5,13,0,0,36,39,3,8,4,0,37,39,
	3,14,7,0,38,36,1,0,0,0,38,37,1,0,0,0,39,40,1,0,0,0,40,43,5,14,0,0,41,44,
	3,8,4,0,42,44,3,14,7,0,43,41,1,0,0,0,43,42,1,0,0,0,44,46,1,0,0,0,45,28,
	1,0,0,0,45,31,1,0,0,0,45,34,1,0,0,0,46,49,1,0,0,0,47,45,1,0,0,0,47,48,1,
	0,0,0,48,3,1,0,0,0,49,47,1,0,0,0,50,51,3,6,3,0,51,60,5,11,0,0,52,57,3,2,
	1,0,53,54,5,15,0,0,54,56,3,2,1,0,55,53,1,0,0,0,56,59,1,0,0,0,57,55,1,0,
	0,0,57,58,1,0,0,0,58,61,1,0,0,0,59,57,1,0,0,0,60,52,1,0,0,0,60,61,1,0,0,
	0,61,62,1,0,0,0,62,63,5,12,0,0,63,5,1,0,0,0,64,65,7,2,0,0,65,7,1,0,0,0,
	66,69,3,10,5,0,67,69,3,4,2,0,68,66,1,0,0,0,68,67,1,0,0,0,69,9,1,0,0,0,70,
	73,5,30,0,0,71,73,3,12,6,0,72,70,1,0,0,0,72,71,1,0,0,0,73,11,1,0,0,0,74,
	75,7,3,0,0,75,13,1,0,0,0,76,77,7,4,0,0,77,15,1,0,0,0,9,26,38,43,45,47,57,
	60,68,72];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FormulaExpressionsParser.__ATN) {
			FormulaExpressionsParser.__ATN = new ATNDeserializer().deserialize(FormulaExpressionsParser._serializedATN);
		}

		return FormulaExpressionsParser.__ATN;
	}


	static DecisionsToDFA = FormulaExpressionsParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class FormulaContext extends ParserRuleContext {
	constructor(parser?: FormulaExpressionsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(FormulaExpressionsParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return FormulaExpressionsParser.RULE_formula;
	}
	public enterRule(listener: FormulaExpressionsListener): void {
	    if(listener.enterFormula) {
	 		listener.enterFormula(this);
		}
	}
	public exitRule(listener: FormulaExpressionsListener): void {
	    if(listener.exitFormula) {
	 		listener.exitFormula(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaExpressionsVisitor<Result>): Result {
		if (visitor.visitFormula) {
			return visitor.visitFormula(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public _op!: Token;
	constructor(parser?: FormulaExpressionsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public lhs_list(): LhsContext[] {
		return this.getTypedRuleContexts(LhsContext) as LhsContext[];
	}
	public lhs(i: number): LhsContext {
		return this.getTypedRuleContext(LhsContext, i) as LhsContext;
	}
	public boolean__list(): BooleanContext[] {
		return this.getTypedRuleContexts(BooleanContext) as BooleanContext[];
	}
	public boolean_(i: number): BooleanContext {
		return this.getTypedRuleContext(BooleanContext, i) as BooleanContext;
	}
    public get ruleIndex(): number {
    	return FormulaExpressionsParser.RULE_expression;
	}
	public enterRule(listener: FormulaExpressionsListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: FormulaExpressionsListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaExpressionsVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	constructor(parser?: FormulaExpressionsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public functionName(): FunctionNameContext {
		return this.getTypedRuleContext(FunctionNameContext, 0) as FunctionNameContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return FormulaExpressionsParser.RULE_functionCall;
	}
	public enterRule(listener: FormulaExpressionsListener): void {
	    if(listener.enterFunctionCall) {
	 		listener.enterFunctionCall(this);
		}
	}
	public exitRule(listener: FormulaExpressionsListener): void {
	    if(listener.exitFunctionCall) {
	 		listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaExpressionsVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionNameContext extends ParserRuleContext {
	constructor(parser?: FormulaExpressionsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return FormulaExpressionsParser.RULE_functionName;
	}
	public enterRule(listener: FormulaExpressionsListener): void {
	    if(listener.enterFunctionName) {
	 		listener.enterFunctionName(this);
		}
	}
	public exitRule(listener: FormulaExpressionsListener): void {
	    if(listener.exitFunctionName) {
	 		listener.exitFunctionName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaExpressionsVisitor<Result>): Result {
		if (visitor.visitFunctionName) {
			return visitor.visitFunctionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LhsContext extends ParserRuleContext {
	constructor(parser?: FormulaExpressionsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
    public get ruleIndex(): number {
    	return FormulaExpressionsParser.RULE_lhs;
	}
	public enterRule(listener: FormulaExpressionsListener): void {
	    if(listener.enterLhs) {
	 		listener.enterLhs(this);
		}
	}
	public exitRule(listener: FormulaExpressionsListener): void {
	    if(listener.exitLhs) {
	 		listener.exitLhs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaExpressionsVisitor<Result>): Result {
		if (visitor.visitLhs) {
			return visitor.visitLhs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parser?: FormulaExpressionsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(FormulaExpressionsParser.NUMBER, 0);
	}
	public constant(): ConstantContext {
		return this.getTypedRuleContext(ConstantContext, 0) as ConstantContext;
	}
    public get ruleIndex(): number {
    	return FormulaExpressionsParser.RULE_literal;
	}
	public enterRule(listener: FormulaExpressionsListener): void {
	    if(listener.enterLiteral) {
	 		listener.enterLiteral(this);
		}
	}
	public exitRule(listener: FormulaExpressionsListener): void {
	    if(listener.exitLiteral) {
	 		listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaExpressionsVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	constructor(parser?: FormulaExpressionsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return FormulaExpressionsParser.RULE_constant;
	}
	public enterRule(listener: FormulaExpressionsListener): void {
	    if(listener.enterConstant) {
	 		listener.enterConstant(this);
		}
	}
	public exitRule(listener: FormulaExpressionsListener): void {
	    if(listener.exitConstant) {
	 		listener.exitConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaExpressionsVisitor<Result>): Result {
		if (visitor.visitConstant) {
			return visitor.visitConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanContext extends ParserRuleContext {
	constructor(parser?: FormulaExpressionsParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return FormulaExpressionsParser.RULE_boolean;
	}
	public enterRule(listener: FormulaExpressionsListener): void {
	    if(listener.enterBoolean) {
	 		listener.enterBoolean(this);
		}
	}
	public exitRule(listener: FormulaExpressionsListener): void {
	    if(listener.exitBoolean) {
	 		listener.exitBoolean(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FormulaExpressionsVisitor<Result>): Result {
		if (visitor.visitBoolean) {
			return visitor.visitBoolean(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
