import React, { PropsWithChildren } from 'react';
import { DefaultTheme, ThemeProvider as Provider } from 'styled-components';
import { theme as defaultTheme } from './theme';

interface Props extends PropsWithChildren {
  theme?: DefaultTheme;
}

export const ThemeProvider: React.FC<Props> = ({ theme, children }) => (
  <Provider theme={theme ?? defaultTheme}>{children}</Provider>
);

export default ThemeProvider;
