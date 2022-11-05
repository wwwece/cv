import React from 'react';
import TileGrid from './components/TileGrid';
import './i18n/config';
import Router from './router/Router';
import { StoreProvider } from './store';
import { ThemeProvider } from './theme';
import GlobalStyle from './theme/globalStyle';

function App() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <GlobalStyle />
        <TileGrid />
        <Router />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
