import { createGlobalStyle } from 'styled-components';

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
    
    overflow: hidden;

    background-image: url('bg.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${(p) => p.theme.color.background};
    background-blend-mode: luminosity;
}

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
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
