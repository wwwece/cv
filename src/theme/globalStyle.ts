import { createGlobalStyle } from 'styled-components';
import { randomColor } from './theme.utils';

const GlobalStyle = createGlobalStyle`
  html { box-sizing: border-box; }
  *, *:before, *:after { box-sizing: inherit; }

  body {
    margin: 0;
    height: 100vh;
    

    font-size: 16px;
    font-family: ${(p) => p.theme.font.main};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    background-image: url('bg.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${(p) => p.theme.color.background};
    background-blend-mode: ${(p) =>
      p.theme.colorTheme === 'color' ? undefined : 'luminosity'};
  }

  p {
    ${(p) => p.theme.font.size[18]};
    line-height: 200%;
  }

  h1 { ${(p) => p.theme.font.size[32]}; }
  h2 { ${(p) => p.theme.font.size[28]}; }
  h3 { ${(p) => p.theme.font.size[24]}; }
  h4 { ${(p) => p.theme.font.size[20]}; }
  h5 { ${(p) => p.theme.font.size[20]}; }
  h6 { ${(p) => p.theme.font.size[20]}; }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
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

  @keyframes slideInFromBottom {
    0% {
      transform: translateY(110vh);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export default GlobalStyle;
