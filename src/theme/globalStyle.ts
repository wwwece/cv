import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
  }
`;

export default GlobalStyle;
