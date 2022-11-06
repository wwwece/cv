import React from 'react';
import { NavLink } from 'react-router-dom';
import { navBarRoutes } from '../../router/routes';
import { NavBarContainer, NavItem } from './NavBar.styled';

const NavBar: React.FC = () => (
  <NavBarContainer>
    {navBarRoutes.map(({ path, label }) => (
      <NavItem key={path}>
        <NavLink
          to={path}
          className={({ isActive }) => (isActive ? 'is-active' : '')}
        >
          {label}
        </NavLink>
      </NavItem>
    ))}
  </NavBarContainer>
);

export default NavBar;
