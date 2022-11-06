import styled from 'styled-components';
import { NAV_ITEM_WIDTH } from './NavBar.styled';

export const Main = styled.main`
  max-width: ${NAV_ITEM_WIDTH * 3}px;
  height: 100%;
  overflow-x: scroll;
  background-color: rgba(255, 255, 255, 0.9);

  margin-top: ${(p) => p.theme.spacing.xxl};
  margin-bottom: 100px;
  padding: ${(p) => p.theme.spacing.xxl};

  min-height: 500px;

  margin-left: auto;
  margin-right: auto;

  animation: 1s ease-out 0s 1 slideInFromBottom;

  @media ${(p) => p.theme.breakpoint.tablet} {
  }

  @media ${(p) => p.theme.breakpoint.mobile} {
    margin-left: ${(p) => p.theme.spacing.lg};
    margin-right: ${(p) => p.theme.spacing.lg};
  }
`;
