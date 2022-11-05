import { DefaultTheme } from 'styled-components';
import { Breakpoint, Colors, fontSize } from './theme.utils';

const theme: DefaultTheme = {
  colorTheme: 'bw',

  color: Colors,

  borderRadius: {
    sm: '0.25rem',
    md: '0.625rem',
    lg: '1rem',
    xl: '1.5rem',
  },

  spacing: {
    sm: '0.375rem',
    md: '0.625rem',
    lg: '1rem',
    xl: '1.5rem',
    xxl: '2.5rem',
  },

  breakpoint: {
    mobile: `(max-width: ${Breakpoint.mobile}px)`,
    tablet: `(max-width: ${Breakpoint.tablet}px)`,
    laptop: `(max-width: ${Breakpoint.laptop}px)`,
  },

  font: {
    main: 'Georgia',
    secondary: 'Helvetica',
    size: {
      12: fontSize(0.625, 0.75),
      14: fontSize(0.75, 0.875),
      16: fontSize(0.875, 1),
      18: fontSize(1, 1.125),
      20: fontSize(1.125, 1.25),
      24: fontSize(1.25, 1.5),
      28: fontSize(1.5, 1.75),
      32: fontSize(1.75, 2),
      38: fontSize(2, 2.375),
    },
  },
};

const inColorTheme: DefaultTheme = {
  ...theme,
  colorTheme: 'color',
};

export const themes = {
  defaultTheme: theme,
  inColorTheme,
};
