import * as monaco from 'monaco-editor';
import { theme } from './theme';

export type CompletionItem = Omit<monaco.languages.CompletionItem, 'range'> & {
  documentation: {
    example?: string;
    value?: string;
  };
};

export type Theme = typeof theme;

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never;

type Leaves<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: Join<K, Leaves<T[K]>> }[keyof T]
  : '';

export type ColorPath = Leaves<Theme['colors']>;
export type SpacingPath = Leaves<{ spacing: Theme['spacing'] }>;
export type TypographyPath = Leaves<Theme['typography']>;
export type BorderRadiusPath = Leaves<Theme['border']['radius']>;
export type BorderWidthPath = Leaves<Theme['border']['width']>;
