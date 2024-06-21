grammar FormulaExpressions;

// The entry point of the grammar
formula: expression EOF;

// Expressions can be operations, function calls, cell references, or literals
expression:
	expression op = ('*' | '/' | '+' | '-') expression
	| expression op = ('<' | '>' | '<=' | '>=' | '=' | '<>') expression
	| functionCall
	| literal
	| '(' expression ')'
	| expression '?' (lhs | boolean) ':' (lhs | boolean);

functionCall: // Function calls
	functionName '(' (expression (',' expression)*)? ')';

// A function name (e.g., SUM, AVERAGE, IF, MAX, MIN, ROUND)
functionName: 'SUM' | 'IF' | 'MAX' | 'MIN' | 'ROUND';

// LHS of the expression
lhs: literal | functionCall;

// Literals (numbers or strings)
literal: NUMBER | constant;

// Constants (e.g., TRUE, FALSE, BASIC, HRA, DA, PF, ESIC, PT, LTA)
constant: 'BASIC' | 'HRA' | 'DA' | 'PF' | 'ESIC' | 'PT' | 'LTA';

boolean: 'TRUE' | 'FALSE';

// Tokens
NUMBER: [0-9]+ ('.' [0-9]+)?;

// Ignore whitespace
WS: [ \t\r\n]+ -> skip;