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
      {navBarRoutes.map(({ path, label }) => (
        <Link to={path}>{label}</Link>
      ))}
    </StyledNav>
  );
};

export default NavBar;
