import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import '@razorpay/blade/fonts.css';

import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyles } from './GlobalStyles';
// import { BladeProvider } from '@razorpay/blade/components';
// import { bladeTheme } from '@razorpay/blade/tokens';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      {/* <BladeProvider themeTokens={bladeTheme} colorScheme="light"> */}
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      {/* </BladeProvider> */}
    </React.StrictMode>
  );
}
