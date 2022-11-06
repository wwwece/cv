import React from 'react';
import ColorThemeIconButton from '../../components/ColorThemeIconButton';
import RestartButton from '../../components/RestartButton';
import { StyledHeader } from './Header.styled';
import NavBar from './NavBar';

const Header: React.FC = () => (
  <StyledHeader>
    <div className="left-content">
      <ColorThemeIconButton />
    </div>

    <nav>
      <NavBar />
    </nav>

    <div className="right-content">
      <RestartButton />
    </div>
  </StyledHeader>
);

export default Header;
