import styled from 'styled-components';
import { NAV_ITEM_WIDTH } from './NavBar.styled';

export const Main = styled.main`
  max-width: ${NAV_ITEM_WIDTH * 3}px;
  height: 100%;
  overflow-x: scroll;

  h1 {
    text-align: center;
  }

  p::first-letter {
    ${(p) => p.theme.font.size[28]};
  }

  ${(p) => {
    switch (p.theme.colorTheme) {
      case 'color':
        return `
          color: ${p.theme.color.foreground};
          background-color: rgba(33, 38, 43, 0.95);
        `;
      default:
        return `
          background-color: rgba(255, 255, 255, 0.9);
          box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.5);
        `;
    }
  }};

  border-radius: 12.5rem 1rem 12.5rem 1rem;

  margin-top: ${(p) => p.theme.spacing.xxl};
  margin-bottom: 100px;
  padding: ${(p) => p.theme.spacing.xxl};

  min-height: 500px;

  margin-left: ${(p) => p.theme.spacing.xxl};
  margin-right: auto;

  animation: 1s ease-out 0s 1 slideInFromBottom;

  @media ${(p) => p.theme.breakpoint.laptop} {
    margin-left: auto;
    border-radius: 9rem 0.5rem 9rem 0.5rem;
  }

  @media ${(p) => p.theme.breakpoint.mobile} {
    margin-left: ${(p) => p.theme.spacing.lg};
    margin-right: ${(p) => p.theme.spacing.lg};
    border-radius: 6rem 0.5rem 6rem 0.5rem;
  }
`;
