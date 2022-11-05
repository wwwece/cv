import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { navBarRoutes } from '../../router/routes';

const Container = styled.ul`
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.75);

  animation: 0.5s ease-out 0s 1 slideInFromBottom;
`;

const NavItem = styled.li`
  a {
    display: flex;
    align-items: center;
    width: 200px;
    height: 100%;
    padding: ${(p) => p.theme.spacing.lg};
    cursor: pointer;

    text-align: center;
    text-decoration: none;
    color: ${(p) => p.theme.color.text};
    ${(p) => p.theme.font.size[16]};

    &.is-active {
      background-color: rgba(255, 255, 255, 0.5);
    }

    transition: 0.25s;

    :hover {
      background-color: rgba(255, 255, 255, 0.5);
    }

    :active {
      background-color: rgba(255, 255, 255, 1);
    }
  }
`;

const NavBar: React.FC = () => (
  <Container>
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
  </Container>
);

export default NavBar;
