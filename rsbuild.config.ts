import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';

export default defineConfig({
  plugins: [pluginReact()],
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
