import { observer } from 'mobx-react-lite';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useStore } from '../../store';
import Header from './Header';
import { NAV_ITEM_WIDTH } from './NavBar';

const Main = styled.main`
  max-width: ${NAV_ITEM_WIDTH * 3}px;
  height: 100%;
  overflow-x: scroll;
  background-color: rgba(255, 255, 255, 0.9);

  margin-top: ${(p) => p.theme.spacing.xxl};
  padding: ${(p) => p.theme.spacing.xxl};

  margin-left: auto;
  margin-right: auto;

  animation: 1s ease-out 0s 1 slideInFromBottom;

  @media ${(p) => p.theme.breakpoint.tablet} {
    margin-top: ${(p) => p.theme.spacing.xl};
  }

  @media ${(p) => p.theme.breakpoint.mobile} {
    margin-top: ${(p) => p.theme.spacing.lg};
    margin-left: ${(p) => p.theme.spacing.lg};
    margin-right: ${(p) => p.theme.spacing.lg};
  }
`;

export const Layout: React.FC = observer(() => {
  const {
    uiStore: { introCompleted },
  } = useStore();

  if (!introCompleted) return null;

  return (
    <>
      <Header />

      <Main>
        <Outlet />
      </Main>
    </>
  );
});

export default Layout;
