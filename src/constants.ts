import * as monaco from 'monaco-editor';
import { CompletionItem } from './types';
export const PAYROLL_LANGUAGE = 'payroll-lang';

export const completionItems: CompletionItem[] = [
  // Constants
  {
    label: 'TRUE',
    kind: monaco.languages.CompletionItemKind.Constant,
    insertText: 'TRUE',
    documentation: {
      value: 'Represents the boolean value true.',
      isTrusted: true,
    },
  },
  {
    label: 'FALSE',
    kind: monaco.languages.CompletionItemKind.Constant,
    insertText: 'FALSE',
    documentation: {
      value: 'Represents the boolean value false.',
      isTrusted: true,
    },
  },
  {
    label: 'BASIC',
    kind: monaco.languages.CompletionItemKind.Constant,
    insertText: 'BASIC',
    documentation: {
      value: 'Constant representing the BASIC salary component.',
      isTrusted: true,
    },
  },
  {
    label: 'HRA',
    kind: monaco.languages.CompletionItemKind.Constant,
    insertText: 'HRA',
    documentation: {
      value: 'Constant representing the House Rent Allowance.',
      isTrusted: true,
    },
  },
  {
    label: 'DA',
    kind: monaco.languages.CompletionItemKind.Constant,
    insertText: 'DA',
    documentation: {
      value: 'Constant representing the Dearness Allowance.',
      isTrusted: true,
    },
  },
  {
    label: 'PF',
    kind: monaco.languages.CompletionItemKind.Constant,
    insertText: 'PF',
    documentation: {
      value: 'Constant representing the Provident Fund.',
      isTrusted: true,
    },
  },
  {
    label: 'ESIC',
    kind: monaco.languages.CompletionItemKind.Constant,
    insertText: 'ESIC',
    documentation: {
      value:
        'Constant representing the Employee State Insurance Corporation contribution.',
      isTrusted: true,
    },
  },
  {
    label: 'PT',
    kind: monaco.languages.CompletionItemKind.Constant,
    insertText: 'PT',
    documentation: {
      value: 'Constant representing the Professional Tax.',
      isTrusted: true,
    },
  },
  {
    label: 'LTA',
    kind: monaco.languages.CompletionItemKind.Constant,
    insertText: 'LTA',
    documentation: {
      value: 'Constant representing the Leave Travel Allowance.',
      isTrusted: true,
    },
  },

  // Functions
  {
    label: 'SUM',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: 'SUM(${1:num1}, ${2:num2})',
    insertTextRules:
      monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: {
      value: 'Calculates the sum of two numbers.',
      isTrusted: true,
      example: 'SUM(5, 10)',
    },
  },
  {
    label: 'IF',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: '(${1:condition} ? ${2:value_if_true} : ${3:value_if_false})',
    insertTextRules:
      monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: {
      value:
        "Returns one value if a condition is true and another value if it's false.",
      isTrusted: true,
      example: '(BASIC > 5000 ? BASIC*0.5 : BASIC*0.4)',
    },
  },
  {
    label: 'MAX',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: 'MAX(${1:num1}, ${2:num2})',
    insertTextRules:
      monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: {
      value: 'Returns the largest value among two numbers.',
      isTrusted: true,
      example: 'MAX(5, 10)',
    },
  },
  {
    label: 'MIN',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: 'MIN(${1:num1}, ${2:num2})',
    insertTextRules:
      monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: {
      value: 'Returns the smallest value among two numbers.',
      isTrusted: true,
      example: 'MIN(5, 10)',
    },
  },
  {
    label: 'ROUND',
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: 'ROUND(${1:number}, ${2:decimal_places})',
    insertTextRules:
      monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: {
      value: 'Rounds a number to a specified number of decimal places.',
      isTrusted: true,
      example: 'ROUND(3.14159, 2)',
    },
  },
];
