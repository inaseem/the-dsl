// Generated from grammar/PayrollDSL.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { FormulaContext } from "./PayrollDSLParser";
import { ExpressionContext } from "./PayrollDSLParser";
import { FunctionCallContext } from "./PayrollDSLParser";
import { FunctionNameContext } from "./PayrollDSLParser";
import { LhsContext } from "./PayrollDSLParser";
import { LiteralContext } from "./PayrollDSLParser";
import { ConstantContext } from "./PayrollDSLParser";
import { BooleanContext } from "./PayrollDSLParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PayrollDSLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class PayrollDSLVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `PayrollDSLParser.formula`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormula?: (ctx: FormulaContext) => Result;
	/**
	 * Visit a parse tree produced by `PayrollDSLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `PayrollDSLParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by `PayrollDSLParser.functionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionName?: (ctx: FunctionNameContext) => Result;
	/**
	 * Visit a parse tree produced by `PayrollDSLParser.lhs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLhs?: (ctx: LhsContext) => Result;
	/**
	 * Visit a parse tree produced by `PayrollDSLParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `PayrollDSLParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;
	/**
	 * Visit a parse tree produced by `PayrollDSLParser.boolean`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolean?: (ctx: BooleanContext) => Result;
}

