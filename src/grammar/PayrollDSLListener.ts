// Generated from grammar/PayrollDSL.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { FormulaContext } from "./PayrollDSLParser";
import { ExpressionContext } from "./PayrollDSLParser";
import { FunctionCallContext } from "./PayrollDSLParser";
import { FunctionNameContext } from "./PayrollDSLParser";
import { LhsContext } from "./PayrollDSLParser";
import { LiteralContext } from "./PayrollDSLParser";
import { ConstantContext } from "./PayrollDSLParser";
import { BooleanContext } from "./PayrollDSLParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `PayrollDSLParser`.
 */
export default class PayrollDSLListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `PayrollDSLParser.formula`.
	 * @param ctx the parse tree
	 */
	enterFormula?: (ctx: FormulaContext) => void;
	/**
	 * Exit a parse tree produced by `PayrollDSLParser.formula`.
	 * @param ctx the parse tree
	 */
	exitFormula?: (ctx: FormulaContext) => void;
	/**
	 * Enter a parse tree produced by `PayrollDSLParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `PayrollDSLParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `PayrollDSLParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `PayrollDSLParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by `PayrollDSLParser.functionName`.
	 * @param ctx the parse tree
	 */
	enterFunctionName?: (ctx: FunctionNameContext) => void;
	/**
	 * Exit a parse tree produced by `PayrollDSLParser.functionName`.
	 * @param ctx the parse tree
	 */
	exitFunctionName?: (ctx: FunctionNameContext) => void;
	/**
	 * Enter a parse tree produced by `PayrollDSLParser.lhs`.
	 * @param ctx the parse tree
	 */
	enterLhs?: (ctx: LhsContext) => void;
	/**
	 * Exit a parse tree produced by `PayrollDSLParser.lhs`.
	 * @param ctx the parse tree
	 */
	exitLhs?: (ctx: LhsContext) => void;
	/**
	 * Enter a parse tree produced by `PayrollDSLParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `PayrollDSLParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Enter a parse tree produced by `PayrollDSLParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `PayrollDSLParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;
	/**
	 * Enter a parse tree produced by `PayrollDSLParser.boolean`.
	 * @param ctx the parse tree
	 */
	enterBoolean?: (ctx: BooleanContext) => void;
	/**
	 * Exit a parse tree produced by `PayrollDSLParser.boolean`.
	 * @param ctx the parse tree
	 */
	exitBoolean?: (ctx: BooleanContext) => void;
}

