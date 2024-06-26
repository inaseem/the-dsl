import {
  ExpressionContext,
  FormulaContext,
  FunctionCallContext,
  LiteralContext,
} from './grammar/PayrollDSLParser';
import PayrollDSLVisitor from './grammar/PayrollDSLVisitor';

export default class PayrollDSLInterpreter extends PayrollDSLVisitor<
  number | boolean
> {
  private constants: Map<string, number>;

  constructor(constants: Map<string, number>) {
    super();
    this.constants = constants;
  }

  visitFormula = (ctx: FormulaContext): number | boolean => {
    return this.visit(ctx.expression());
  };

  visitExpression = (ctx: ExpressionContext): number | boolean => {
    if (ctx._op) {
      const left = this.visit(ctx.expression(0));
      const right = this.visit(ctx.expression(1));
      const op = ctx._op.text;

      switch (op) {
        case '*':
          return (left as number) * (right as number);
        case '/':
          return (left as number) / (right as number);
        case '+':
          return (left as number) + (right as number);
        case '-':
          return (left as number) - (right as number);
        case '<':
          return (left as number) < (right as number);
        case '>':
          return (left as number) > (right as number);
        case '<=':
          return (left as number) <= (right as number);
        case '>=':
          return (left as number) >= (right as number);
        case '=':
          return left === right;
        case '<>':
          return left !== right;
        default:
          throw new Error(`Unknown operator: ${op}`);
      }
    } else if (ctx.functionCall()) {
      return this.visit(ctx.functionCall());
    } else if (ctx.literal()) {
      return this.visit(ctx.literal());
    } else if (ctx.expression_list().length === 1) {
      // This is for expressions in parentheses
      //   console.log("Single Expression")
      return this.visit(ctx.expression(0));
    } else if (ctx.expression_list().length === 3) {
      // Ternary operation
      //   console.log("3 Expression")
      const condition = this.visit(ctx.expression(0));
      const trueValue = this.visit(ctx.expression(1));
      const falseValue = this.visit(ctx.expression(2));
      return condition ? trueValue : falseValue;
    }
    console.log(ctx);
    throw new Error('Unable to evaluate expression');
  };

  visitFunctionCall = (ctx: FunctionCallContext): number | boolean => {
    const functionName = ctx.functionName().getText().toUpperCase();
    const args = ctx.expression_list().map((exp) => this.visit(exp));

    switch (functionName) {
      case 'SUM':
        return args.reduce(
          (sum, value) => (sum as number) + (value as number),
          0
        );
      case 'IF':
        return args[0] ? args[1] : args[2];
      case 'MAX':
        return Math.max(...(args as number[]));
      case 'MIN':
        return Math.min(...(args as number[]));
      case 'ROUND':
        return Math.round(args[0] as number);
      default:
        throw new Error(`Unknown function: ${functionName}`);
    }
  };

  visitLiteral = (ctx: LiteralContext): number => {
    if (ctx.NUMBER()) {
      return parseFloat(ctx.NUMBER().getText());
    } else if (ctx.constant()) {
      const constantName = ctx.constant().getText();
      const value = this.constants.get(constantName);
      if (value === undefined) {
        throw new Error(`Unknown constant: ${constantName}`);
      }
      return value;
    }
    throw new Error('Unable to evaluate literal');
  };
}
