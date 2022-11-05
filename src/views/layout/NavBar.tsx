import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  padding: 1rem;
  background-color: white;
  opacity: 0.75;
`;

const NavBar: React.FC = () => {
  return (
    <StyledNav>
      <div>Navigaatio tähän</div>
    </StyledNav>
  );
};

export default NavBar;
