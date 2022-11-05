import React from 'react';
import './i18n/config';
import Router from './router/Router';
import { ThemeProvider } from './theme';
import GlobalStyle from './theme/globalStyle';

function App() {
  return (
    <div>
      <ThemeProvider>
        <GlobalStyle />
        {/* <TileGrid /> */}
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
