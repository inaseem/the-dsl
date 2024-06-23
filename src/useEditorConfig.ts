import * as monaco from 'monaco-editor';
import { useEffect, useRef } from 'react';
import { useTheme } from 'styled-components';
import { AntlrDiagnosticsAdapter } from './AntlrDiagnosticsAdapter';
import { completionItems } from './constants';
import { Theme } from './types';
import { hslToHex } from './utils';

const initEditorConfig = (language: string, theme: Theme) => {
  monaco.languages.register({ id: language });

  monaco.languages.setMonarchTokensProvider(language, {
    keywords: [
      'SUM',
      'MAX',
      'MIN',
      'ROUND',
      'TRUE',
      'FALSE',
      'BASIC',
      'HRA',
      'DA',
      'PF',
      'ESIC',
      'PT',
      'LTA',
    ],
    operators: ['*', '/', '+', '-', '<', '>', '<=', '>=', '=', '<>'],
    tokenizer: {
      root: [
        { include: '@whitespace' },

        // Functions
        [/\b(SUM|MAX|MIN|ROUND|IF)\b/, 'xpayroll.function'],

        // Constants
        [/\b(BASIC|HRA|DA|PF|ESIC|PT|LTA)\b/, 'xpayroll.constant'],
        [/\b(TRUE|FALSE)\b/, 'xpayroll.boolean'],

        // Operators
        [/[<>]=?|<=|>=|[+\-*/=]/, 'xpayroll.operator'],

        // Numbers
        [/\d*\.\d+([eE][\-+]?\d+)?/, 'xpayroll.number'],
        [/0[xX][0-9a-fA-F]+/, 'xpayroll.number'],
        [/\d+/, 'xpayroll.number'],

        // Parentheses
        [/[()]/, '@brackets'],

        // Identifier
        [
          /[a-zA-Z_]\w*/,
          {
            cases: {
              '@keywords': 'keyword',
              '@default': 'xpayroll.identifier',
            },
          },
        ],
      ],
      whitespace: [
        [/[ \t\r\n]+/, ''],
        [/\/\*\*(?!\/)/, 'comment.doc', '@doccomment'],
        [/\/\*/, 'comment', '@comment'],
        [/\/\/.*$/, 'comment'],
      ],
      comment: [
        [/[^\/*]+/, 'comment'],
        [/\*\//, 'comment', '@pop'],
        [/[\/*]/, 'comment'],
      ],
      doccomment: [
        [/[^\/*]+/, 'comment.doc'],
        [/\*\//, 'comment.doc', '@pop'],
        [/[\/*]/, 'comment.doc'],
      ],
    },
  });

  monaco.editor.defineTheme('xpayroll-theme', {
    base: 'vs-dark',
    inherit: true,
    rules: [
      {
        token: 'xpayroll.constant',
        foreground: '#7FFF00',
        fontStyle: 'italic',
      },
      {
        token: 'xpayroll.operator',
        foreground: '#FF6347',
        fontStyle: 'bold',
      },
      { token: 'xpayroll.number', foreground: '#00CED1' },
      {
        token: 'xpayroll.function',
        foreground: '#DA70D6',
        fontStyle: 'bold italic',
      },
      {
        token: 'xpayroll.boolean',
        foreground: '#F9D342',
      },
      // Add more styling rules as needed
    ],
    colors: {
      'editor.background': hslToHex(
        theme.colors.surface.background.gray.moderate
      ),
      'editor.foreground': hslToHex(theme.colors.surface.text.gray.subtle),
      'editorError.background': hslToHex(
        theme.colors.feedback.background.negative.subtle
      ),
      'editorHoverWidget.background': hslToHex(
        theme.colors.popup.background.intense
      ),
      'editorHoverWidget.foreground': hslToHex(
        theme.colors.surface.text.primary.normal
      ),
      'editorHoverWidget.border': hslToHex(
        theme.colors.surface.border.primary.normal
      ),
      // Add more colors as needed
    },
  });

  monaco.languages.registerHoverProvider(language, {
    provideHover: function (model, position) {
      const word = model.getWordAtPosition(position);
      if (word) {
        const hoveredFunction = completionItems.find(
          (item) =>
            item.label === word.word &&
            item.kind === monaco.languages.CompletionItemKind.Function
        );
        const hoveredConstant = completionItems.find(
          (item) =>
            item.label === word.word &&
            item.kind === monaco.languages.CompletionItemKind.Constant
        );
        if (hoveredFunction) {
          const contents = [];
          contents.push({ value: '**' + hoveredFunction.label + '**' });
          if (
            hoveredFunction.documentation &&
            hoveredFunction.documentation.value
          ) {
            contents.push({ value: hoveredFunction.documentation.value });
          }
          if (hoveredFunction.documentation.example) {
            contents.push({
              value: 'Example: ' + hoveredFunction.documentation.example,
            });
          }
          return {
            range: new monaco.Range(
              position.lineNumber,
              word.startColumn,
              position.lineNumber,
              word.endColumn
            ),
            contents,
          };
        } else if (hoveredConstant) {
          return {
            range: new monaco.Range(
              position.lineNumber,
              word.startColumn,
              position.lineNumber,
              word.endColumn
            ),
            contents: [
              { value: '**' + hoveredConstant.label + '**' },
              { value: hoveredConstant.documentation?.value || '' },
            ],
          };
        }
      }
      return null;
    },
  });

  monaco.languages.registerCompletionItemProvider(language, {
    provideCompletionItems(model, position, context, token) {
      const word = model.getWordUntilPosition(position);
      const range = new monaco.Range(
        position.lineNumber,
        word.startColumn,
        position.lineNumber,
        word.endColumn
      );

      return {
        suggestions: completionItems.map((item) => ({ ...item, range })),
      };
    },
  });
};

const useEditorConfig = (language: string) => {
  const isConfigInitialized = useRef(false);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const theme = useTheme();

  useEffect(() => {
    if (!isConfigInitialized.current) {
      initEditorConfig(language, theme);
      isConfigInitialized.current = true;
    }
  }, []);

  return {
    initEditor: (container: HTMLDivElement, value: string) => {
      const editor = monaco.editor.create(container, {
        value,
        language,
        theme: 'xpayroll-theme',
        automaticLayout: true,
        minimap: {
          enabled: false,
        },
        wordBreak: 'keepAll',
        lineNumbers: 'off',
        fontFamily: theme.typography.fonts.family.code,
        fontLigatures: false,
      });

      new AntlrDiagnosticsAdapter(editor, language);
      editorRef.current = editor;
      return { editor };
    },
    disposeEditor: () => {
      if (editorRef.current) {
        editorRef.current.dispose();
      }
    },
  };
};

export default useEditorConfig;
