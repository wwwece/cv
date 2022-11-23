import styled from 'styled-components';
import { randomColor } from '../../theme';
import { NAV_ITEM_WIDTH } from './NavBar.styled';

export const Main = styled.main`
  max-width: ${NAV_ITEM_WIDTH * 3}px;
  height: 100%;

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

  border-radius: 12.5rem 1rem 12.5rem 1rem;

  margin-top: 10rem;
  margin-bottom: 8.5rem;
  padding: ${(p) => p.theme.spacing.xxl};

  min-height: 500px;

  margin-left: ${(p) => p.theme.spacing.xxl};
  margin-right: auto;

  animation: 1s ease-out 0s 1 slideInFromBottom;

  @media ${(p) => p.theme.breakpoint.laptop} {
    margin-top: 8rem;
    margin-left: auto;
    border-radius: 4rem;
  }

  @media ${(p) => p.theme.breakpoint.mobile} {
    margin-left: ${(p) => p.theme.spacing.lg};
    margin-right: ${(p) => p.theme.spacing.lg};
  }
`;
