import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@razorpay/blade/fonts.css';

import { BladeProvider } from '@razorpay/blade/components';
import { bladeTheme } from '@razorpay/blade/tokens';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <BladeProvider themeTokens={bladeTheme} colorScheme="dark">
        <App />
      </BladeProvider>
    </React.StrictMode>
  );
}
