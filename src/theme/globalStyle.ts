import { createGlobalStyle } from 'styled-components';
import { randomColor } from './theme.utils';

const GlobalStyle = createGlobalStyle`
  html { box-sizing: border-box; }
  *, *:before, *:after { box-sizing: inherit; }

  body {
    margin: 0;

    font-size: 16px;
    font-family: ${(p) => p.theme.font.main};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    overflow-x: hidden;
    
    background-image: url('bg.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${(p) => p.theme.color.background};
    background-blend-mode: ${(p) =>
      p.theme.colorTheme === 'color' ? undefined : 'luminosity'};
  }

  p, ul {
    ${(p) => p.theme.font.size[18]};
    line-height: 200%;
  }

  strong {
    text-transform: uppercase;
  }

  a {
    font-weight: bold;
    color: ${(p) =>
      p.theme.colorTheme === 'color'
        ? randomColor()
        : p.theme.color.background};
        
    :hover {
      text-decoration: none;
    }
  }

  h2, h3, h4, h5, h6 {
    margin-top: ${(p) => p.theme.spacing.xl};;
    margin-bottom: ${(p) => p.theme.spacing.md};;
  }

  h1 { ${(p) => p.theme.font.size[32]}; }
  h2 { ${(p) => p.theme.font.size[20]}; }
  h3 { ${(p) => p.theme.font.size[18]}; }
  h4 { ${(p) => p.theme.font.size[16]}; }
  h5 { ${(p) => p.theme.font.size[16]}; }
  h6 { ${(p) => p.theme.font.size[16]}; }

  ul {
    margin: ${(p) => p.theme.spacing.md};
    padding-left: ${(p) => p.theme.spacing.xl};
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  hr {
    border: 1px solid ${(p) =>
      p.theme.colorTheme === 'color' ? randomColor() : p.theme.color.text};
  }

  .text-center { text-align: center; }

  @keyframes slideInFromBottom {
    0% {
      transform: translateY(110vh);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes slideInFromTop {
    0% {
      transform: translateY(-110vh);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default GlobalStyle;
