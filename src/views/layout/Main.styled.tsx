import styled from 'styled-components';
import { randomColor } from '../../theme';

export const Main = styled.main`
  h1 {
    text-align: center;
  }

  p::first-letter,
  h2::first-letter {
    ${(p) => p.theme.font.size[28]};
  }

  a {
    display: inline;
    padding: 0.15rem ${(p) => p.theme.spacing.sm};
    color: ${(p) => p.theme.color.foreground};
    border-radius: 0.2rem;

    :hover {
      background-color: transparent;
      text-decoration: underline;
    }
  }

  ${(p) => {
    switch (p.theme.colorTheme) {
      case 'color':
        return `
          color: ${p.theme.color.foreground};
          background-color: rgba(33, 38, 43, 0.95);
          a {
            background-color: ${randomColor()};
            :hover {
              color: ${p.theme.color.foreground};
            }
          }
        `;
      default:
        return `
          background-color: rgba(255, 255, 255, 0.9);
          box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.5);
          a {
            background-color: ${p.theme.color.background};
            :hover {
              color: ${p.theme.color.text};
            }
          }
        `;
    }
  }};

  width: 48vw;
  height: 100%;
  min-height: 99vh;
  padding: 10rem ${(p) => p.theme.spacing.xxl};

  animation: 1s ease-out 0s 1 slideInFromBottom;

  @media ${(p) => p.theme.breakpoint.laptop} {
    min-height: 70vh;
    width: 90vw;
    margin: 8.5rem auto;
    padding-top: ${(p) => p.theme.spacing.xxl};
    padding-bottom: ${(p) => p.theme.spacing.xxl};

    border-radius: 0.5rem;
  }

  @media ${(p) => p.theme.breakpoint.mobile} {
    width: auto;
    margin: 6rem ${(p) => p.theme.spacing.lg};
  }
`;
