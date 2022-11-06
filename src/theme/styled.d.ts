import 'styled-components';

type ColorsType = typeof import('./theme.utils').Colors;

declare module 'styled-components' {
  export interface DefaultTheme {
    colorTheme: ColorTheme;

    color: ColorsType;

    spacing: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
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
