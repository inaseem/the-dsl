import * as monaco from 'monaco-editor';
import { PAYROLL_LANGUAGE } from './constants';

export const colorizeExampleCode = (text: string, htmlElement: HTMLElement) => {
  monaco.editor
    .colorize(text, PAYROLL_LANGUAGE, { tabSize: 1 })
    .then((result) => {
      htmlElement.innerHTML = result;
    });
};
