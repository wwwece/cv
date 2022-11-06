import { observer } from 'mobx-react-lite';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useStore } from '../../store';
import Header from './Header';
import { Main } from './Main.styled';

const Container = styled.div`
  padding-bottom: 1px;
`;

export const Layout: React.FC = observer(() => {
  const {
    uiStore: { introCompleted },
  } = useStore();

  if (!introCompleted) return null;

  return (
    <Container>
      <Header />

      <Main>
        <Outlet />
      </Main>
    </Container>
  );
});

export default Layout;
