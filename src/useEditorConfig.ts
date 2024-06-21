import * as monaco from 'monaco-editor';
import { useEffect, useRef } from 'react';
import { AntlrDiagnosticsAdapter } from './AntlrDiagnosticsAdapter';
import { completionItems } from './constants';
import { Theme, useTheme } from '@razorpay/blade/components';

// Helper function to convert HSL to RGB
function hslToRgb(
  h: number,
  s: number,
  l: number
): { r: number; g: number; b: number } {
  s /= 100;
  l /= 100;

  const k = (n: number): number => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);

  const f = (n: number): number =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

  return {
    r: Math.round(255 * f(0)),
    g: Math.round(255 * f(8)),
    b: Math.round(255 * f(4)),
  };
}

function hslToHex(hsl: string): string {
  // Helper function to convert RGB to HEX
  function rgbToHex(r: number, g: number, b: number): string {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  }

  // Helper function to convert alpha to HEX
  function alphaToHex(a: number): string {
    return Math.round(a * 255)
      .toString(16)
      .padStart(2, '0');
  }

  // Extract HSL(A) values from input string
  const hslPattern =
    /hsla?\(\s*(\d+),\s*(\d+)%,\s*(\d+)%\s*(?:,\s*([0-9.]+)\s*)?\)/;
  const result = hslPattern.exec(hsl);

  if (!result) {
    throw new Error('Invalid HSL(A) color string');
  }

  const h = parseInt(result[1], 10);
  const s = parseInt(result[2], 10);
  const l = parseInt(result[3], 10);
  const a = result[4] !== undefined ? parseFloat(result[4]) : 1;

  const { r, g, b } = hslToRgb(h, s, l);
  const hex = rgbToHex(r, g, b);

  return a < 1 ? `${hex}${alphaToHex(a)}` : hex;
}

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
        theme.colors.surface.background.gray.intense
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
  const { theme } = useTheme();

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
