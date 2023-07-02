import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import TileGrid from './components/TileGrid';
import './i18n/config';
import Router from './router/Router';
import { useStore } from './store';
import { ThemeProvider } from './theme';
import GlobalStyle from './theme/globalStyle';

const App = observer(() => {
  const {
    uiStore: { colorTheme },
    eventsStore: { triggerEvent },
  } = useStore();

  useEffect(() => {
    triggerEvent('app-loaded');
  }, [triggerEvent]);

  return (
    <ThemeProvider colorTheme={colorTheme}>
      <GlobalStyle />
      <TileGrid />
      <Router />
    </ThemeProvider>
  );
});

export default App;
