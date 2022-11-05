import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { navBarRoutes } from '../../router/routes';
import { randomColor } from '../../theme';

export const NAV_ITEM_WIDTH = 280;

const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: stretch;

  @media ${(p) => p.theme.breakpoint.tablet} {
    flex-wrap: wrap;
    width: 100vw;
    justify-content: stretch;
    align-items: stretch;
  }
`;

const NavItem = styled.li`
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${NAV_ITEM_WIDTH}px;
    height: 100%;
    padding: ${(p) => p.theme.spacing.lg};
    cursor: pointer;

    text-align: center;
    text-decoration: none;

    ${(p) => {
      switch (p.theme.colorTheme) {
        case 'color':
          return `
            background-color: ${randomColor()};
            color: ${p.theme.color.foreground};
            opacity: 0.75;
            &.is-active, :hover {
              opacity: 1;
            }
            :active {
              opacity: 0.75;
            }
          `;
        default:
          return `
            background-color: none;
            color: ${p.theme.color.text};
            &.is-active, :hover  {
              background-color: rgba(255, 255, 255, 0.5);
            }
            :active {
              background-color: rgba(255, 255, 255, 1);
            }
          `;
      }
    }}

    ${(p) => p.theme.font.size[24]};
  }

  @media ${(p) => p.theme.breakpoint.tablet} {
    width: 50vw;
    a {
      width: 50vw;
    }
  }

  @media ${(p) => p.theme.breakpoint.mobile} {
    width: 100vw;
    a {
      width: 100vw;
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
