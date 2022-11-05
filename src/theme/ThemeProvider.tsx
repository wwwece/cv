import React, { PropsWithChildren } from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import { themes } from './theme';

interface Props extends PropsWithChildren {
  colorTheme?: ColorTheme;
}

export const ThemeProvider: React.FC<Props> = ({ colorTheme, children }) => {
  const getTheme = () => {
    if (colorTheme === 'color') return themes.inColorTheme;
    return themes.defaultTheme;
  };

  return <Provider theme={getTheme()}>{children}</Provider>;
};

export default ThemeProvider;
