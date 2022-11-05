import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

export const Layout: React.FC = () => {
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
};

export default Layout;
