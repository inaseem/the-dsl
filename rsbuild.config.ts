import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';
import { pluginStyledComponents } from '@rsbuild/plugin-styled-components';
const mode = process.env.NODE_ENV || 'development';
import { name } from './package.json';

export default defineConfig({
  plugins: [pluginReact(), pluginStyledComponents()],
  html: {
    template: 'public/index.html',
    mountId: 'root',
  },
  output: {
    assetPrefix: mode === 'production' ? `/${name}/` : '/',
  },
  tools: {
    rspack: {
      plugins: [
        new MonacoWebpackPlugin({
          languages: [], //remove all languages
          features: ['codeEditor'], //only include codeEditor
        }),
      ],
    },
  },
});
