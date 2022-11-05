import 'styled-components';

interface Colors {
  primary: string;
  secondary: string;
  grey: string;
  accent: string;
  foreground: string;
  background: string;
  text: string;
  error: string;
  success: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Colors;

    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    spacing: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    breakpoint: {
      mobile: string;
      tablet: string;
      laptop: string;
    };

    font: {
      main: string;
      secondary: string;
      size: {
        12: string;
        14: string;
        16: string;
        18: string;
        20: string;
        24: string;
        28: string;
        32: string;
        38: string;
      };
    };
  }
}
