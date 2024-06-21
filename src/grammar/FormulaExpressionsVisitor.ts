// Generated from grammar/FormulaExpressions.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { FormulaContext } from "./FormulaExpressionsParser";
import { ExpressionContext } from "./FormulaExpressionsParser";
import { FunctionCallContext } from "./FormulaExpressionsParser";
import { FunctionNameContext } from "./FormulaExpressionsParser";
import { LhsContext } from "./FormulaExpressionsParser";
import { LiteralContext } from "./FormulaExpressionsParser";
import { ConstantContext } from "./FormulaExpressionsParser";
import { BooleanContext } from "./FormulaExpressionsParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `FormulaExpressionsParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class FormulaExpressionsVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `FormulaExpressionsParser.formula`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormula?: (ctx: FormulaContext) => Result;
	/**
	 * Visit a parse tree produced by `FormulaExpressionsParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `FormulaExpressionsParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by `FormulaExpressionsParser.functionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionName?: (ctx: FunctionNameContext) => Result;
	/**
	 * Visit a parse tree produced by `FormulaExpressionsParser.lhs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLhs?: (ctx: LhsContext) => Result;
	/**
	 * Visit a parse tree produced by `FormulaExpressionsParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `FormulaExpressionsParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;
	/**
	 * Visit a parse tree produced by `FormulaExpressionsParser.boolean`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolean?: (ctx: BooleanContext) => Result;
}

