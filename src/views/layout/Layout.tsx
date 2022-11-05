import { observer } from 'mobx-react-lite';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useStore } from '../../store';
import NavBar from './NavBar';

export const Layout: React.FC = observer(() => {
  const {
    uiStore: { introCompleted },
  } = useStore();

  if (!introCompleted) return null;

  return (
    <div>
      <header>
        <nav>
          <NavBar />
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
});

export default Layout;
