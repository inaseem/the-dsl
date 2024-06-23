import * as monaco from 'monaco-editor';
import { PAYROLL_LANGUAGE } from './constants';

export const colorizeExampleCode = (text: string, htmlElement: HTMLElement) => {
  monaco.editor
    .colorize(text, PAYROLL_LANGUAGE, { tabSize: 1 })
    .then((result) => {
      htmlElement.innerHTML = result;
    });
};

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

export function hslToHex(hsl: string): string {
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
