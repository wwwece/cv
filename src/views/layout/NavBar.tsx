import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuButton from '../../components/MenuButton';
import { navBarRoutes } from '../../router/routes';
import { useStore } from '../../store';
import { NavBarContainer, NavItem } from './NavBar.styled';

const NavBar: React.FC = observer(() => {
  const {
    uiStore: { windowDimensions },
  } = useStore();

  const { isTablet } = windowDimensions;

  const [isMenuOpen, setIsMenuOpen] = useState(isTablet ? false : true);

  useEffect(() => {
    if (!isTablet) setIsMenuOpen(true);
  }, [isTablet]);

  const toggleMenu = () => {
    if (isTablet) setIsMenuOpen((isOpen) => !isOpen);
  };

  return (
    <NavBarContainer>
      {isTablet && (
        <MenuButton
          isOpen={isMenuOpen}
          className="nav-menu-button"
          onClick={toggleMenu}
        />
      )}

      <ul className={`nav-items ${isMenuOpen ? 'is-open' : ''}`}>
        {navBarRoutes.map(({ path, label }) => (
          <NavItem key={path} onClick={toggleMenu}>
            <NavLink
              to={path}
              className={({ isActive }) => (isActive ? 'is-active' : '')}
            >
              <span>{label}</span>
            </NavLink>
          </NavItem>
        ))}
      </ul>
    </NavBarContainer>
  );
});

export default NavBar;
