// Generated from grammar/FormulaExpressions.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class FormulaExpressionsLexer extends Lexer {
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

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
		"T__25", "T__26", "T__27", "T__28", "NUMBER", "WS",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, FormulaExpressionsLexer._ATN, FormulaExpressionsLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "FormulaExpressions.g4"; }

	public get literalNames(): (string | null)[] { return FormulaExpressionsLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return FormulaExpressionsLexer.symbolicNames; }
	public get ruleNames(): string[] { return FormulaExpressionsLexer.ruleNames; }

	public get serializedATN(): number[] { return FormulaExpressionsLexer._serializedATN; }

	public get channelNames(): string[] { return FormulaExpressionsLexer.channelNames; }

	public get modeNames(): string[] { return FormulaExpressionsLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,31,176,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,1,
	0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,1,
	8,1,8,1,9,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,
	1,15,1,15,1,15,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,
	19,1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,21,1,21,1,21,
	1,21,1,22,1,22,1,22,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,
	25,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,
	1,28,1,29,4,29,158,8,29,11,29,12,29,159,1,29,1,29,4,29,164,8,29,11,29,12,
	29,165,3,29,168,8,29,1,30,4,30,171,8,30,11,30,12,30,172,1,30,1,30,0,0,31,
	1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,
	15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,49,25,51,26,53,
	27,55,28,57,29,59,30,61,31,1,0,2,1,0,48,57,3,0,9,10,13,13,32,32,179,0,1,
	1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,
	13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,
	0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,
	35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,
	0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,
	57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,1,63,1,0,0,0,3,65,1,0,0,0,5,67,1,0,
	0,0,7,69,1,0,0,0,9,71,1,0,0,0,11,73,1,0,0,0,13,75,1,0,0,0,15,78,1,0,0,0,
	17,81,1,0,0,0,19,83,1,0,0,0,21,86,1,0,0,0,23,88,1,0,0,0,25,90,1,0,0,0,27,
	92,1,0,0,0,29,94,1,0,0,0,31,96,1,0,0,0,33,100,1,0,0,0,35,103,1,0,0,0,37,
	107,1,0,0,0,39,111,1,0,0,0,41,117,1,0,0,0,43,123,1,0,0,0,45,127,1,0,0,0,
	47,130,1,0,0,0,49,133,1,0,0,0,51,138,1,0,0,0,53,141,1,0,0,0,55,145,1,0,
	0,0,57,150,1,0,0,0,59,157,1,0,0,0,61,170,1,0,0,0,63,64,5,42,0,0,64,2,1,
	0,0,0,65,66,5,47,0,0,66,4,1,0,0,0,67,68,5,43,0,0,68,6,1,0,0,0,69,70,5,45,
	0,0,70,8,1,0,0,0,71,72,5,60,0,0,72,10,1,0,0,0,73,74,5,62,0,0,74,12,1,0,
	0,0,75,76,5,60,0,0,76,77,5,61,0,0,77,14,1,0,0,0,78,79,5,62,0,0,79,80,5,
	61,0,0,80,16,1,0,0,0,81,82,5,61,0,0,82,18,1,0,0,0,83,84,5,60,0,0,84,85,
	5,62,0,0,85,20,1,0,0,0,86,87,5,40,0,0,87,22,1,0,0,0,88,89,5,41,0,0,89,24,
	1,0,0,0,90,91,5,63,0,0,91,26,1,0,0,0,92,93,5,58,0,0,93,28,1,0,0,0,94,95,
	5,44,0,0,95,30,1,0,0,0,96,97,5,83,0,0,97,98,5,85,0,0,98,99,5,77,0,0,99,
	32,1,0,0,0,100,101,5,73,0,0,101,102,5,70,0,0,102,34,1,0,0,0,103,104,5,77,
	0,0,104,105,5,65,0,0,105,106,5,88,0,0,106,36,1,0,0,0,107,108,5,77,0,0,108,
	109,5,73,0,0,109,110,5,78,0,0,110,38,1,0,0,0,111,112,5,82,0,0,112,113,5,
	79,0,0,113,114,5,85,0,0,114,115,5,78,0,0,115,116,5,68,0,0,116,40,1,0,0,
	0,117,118,5,66,0,0,118,119,5,65,0,0,119,120,5,83,0,0,120,121,5,73,0,0,121,
	122,5,67,0,0,122,42,1,0,0,0,123,124,5,72,0,0,124,125,5,82,0,0,125,126,5,
	65,0,0,126,44,1,0,0,0,127,128,5,68,0,0,128,129,5,65,0,0,129,46,1,0,0,0,
	130,131,5,80,0,0,131,132,5,70,0,0,132,48,1,0,0,0,133,134,5,69,0,0,134,135,
	5,83,0,0,135,136,5,73,0,0,136,137,5,67,0,0,137,50,1,0,0,0,138,139,5,80,
	0,0,139,140,5,84,0,0,140,52,1,0,0,0,141,142,5,76,0,0,142,143,5,84,0,0,143,
	144,5,65,0,0,144,54,1,0,0,0,145,146,5,84,0,0,146,147,5,82,0,0,147,148,5,
	85,0,0,148,149,5,69,0,0,149,56,1,0,0,0,150,151,5,70,0,0,151,152,5,65,0,
	0,152,153,5,76,0,0,153,154,5,83,0,0,154,155,5,69,0,0,155,58,1,0,0,0,156,
	158,7,0,0,0,157,156,1,0,0,0,158,159,1,0,0,0,159,157,1,0,0,0,159,160,1,0,
	0,0,160,167,1,0,0,0,161,163,5,46,0,0,162,164,7,0,0,0,163,162,1,0,0,0,164,
	165,1,0,0,0,165,163,1,0,0,0,165,166,1,0,0,0,166,168,1,0,0,0,167,161,1,0,
	0,0,167,168,1,0,0,0,168,60,1,0,0,0,169,171,7,1,0,0,170,169,1,0,0,0,171,
	172,1,0,0,0,172,170,1,0,0,0,172,173,1,0,0,0,173,174,1,0,0,0,174,175,6,30,
	0,0,175,62,1,0,0,0,5,0,159,165,167,172,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FormulaExpressionsLexer.__ATN) {
			FormulaExpressionsLexer.__ATN = new ATNDeserializer().deserialize(FormulaExpressionsLexer._serializedATN);
		}

		return FormulaExpressionsLexer.__ATN;
	}


	static DecisionsToDFA = FormulaExpressionsLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}