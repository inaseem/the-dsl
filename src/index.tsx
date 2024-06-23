import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { theme } from './theme';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
}
