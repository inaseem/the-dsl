import * as monaco from 'monaco-editor';

export type CompletionItem = Omit<monaco.languages.CompletionItem, 'range'> & {
  documentation: {
    example?: string;
    value?: string;
  };
};
