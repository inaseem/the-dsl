// Generated from grammar/FormulaExpressions.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { FormulaContext } from "./FormulaExpressionsParser";
import { ExpressionContext } from "./FormulaExpressionsParser";
import { FunctionCallContext } from "./FormulaExpressionsParser";
import { FunctionNameContext } from "./FormulaExpressionsParser";
import { LhsContext } from "./FormulaExpressionsParser";
import { LiteralContext } from "./FormulaExpressionsParser";
import { ConstantContext } from "./FormulaExpressionsParser";
import { BooleanContext } from "./FormulaExpressionsParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `FormulaExpressionsParser`.
 */
export default class FormulaExpressionsListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `FormulaExpressionsParser.formula`.
	 * @param ctx the parse tree
	 */
	enterFormula?: (ctx: FormulaContext) => void;
	/**
	 * Exit a parse tree produced by `FormulaExpressionsParser.formula`.
	 * @param ctx the parse tree
	 */
	exitFormula?: (ctx: FormulaContext) => void;
	/**
	 * Enter a parse tree produced by `FormulaExpressionsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FormulaExpressionsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `FormulaExpressionsParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `FormulaExpressionsParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by `FormulaExpressionsParser.functionName`.
	 * @param ctx the parse tree
	 */
	enterFunctionName?: (ctx: FunctionNameContext) => void;
	/**
	 * Exit a parse tree produced by `FormulaExpressionsParser.functionName`.
	 * @param ctx the parse tree
	 */
	exitFunctionName?: (ctx: FunctionNameContext) => void;
	/**
	 * Enter a parse tree produced by `FormulaExpressionsParser.lhs`.
	 * @param ctx the parse tree
	 */
	enterLhs?: (ctx: LhsContext) => void;
	/**
	 * Exit a parse tree produced by `FormulaExpressionsParser.lhs`.
	 * @param ctx the parse tree
	 */
	exitLhs?: (ctx: LhsContext) => void;
	/**
	 * Enter a parse tree produced by `FormulaExpressionsParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `FormulaExpressionsParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Enter a parse tree produced by `FormulaExpressionsParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `FormulaExpressionsParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;
	/**
	 * Enter a parse tree produced by `FormulaExpressionsParser.boolean`.
	 * @param ctx the parse tree
	 */
	enterBoolean?: (ctx: BooleanContext) => void;
	/**
	 * Exit a parse tree produced by `FormulaExpressionsParser.boolean`.
	 * @param ctx the parse tree
	 */
	exitBoolean?: (ctx: BooleanContext) => void;
}

