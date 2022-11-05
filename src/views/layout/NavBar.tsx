import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { navBarRoutes } from '../../router/routes';

const StyledNav = styled.nav`
  padding: 1rem;
  background-color: white;
  opacity: 0.75;
`;

const NavBar: React.FC = () => {
  return (
    <StyledNav>
      <ul>
        {navBarRoutes.map(({ path, label }) => (
          <li key={path}>
            <Link to={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

export default NavBar;
