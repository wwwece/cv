import React from 'react';
import styled from 'styled-components';
import ColorThemeIconButton from '../../components/ColorThemeIconButton';
import RestartButton from '../../components/RestartButton';
import NavBar from './NavBar';

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${(p) => p.theme.spacing.xxl};

  .left-content,
  .right-content {
    position: absolute;
    z-index: 1;
  }
  .left-content {
    left: ${(p) => p.theme.spacing.xxl};
  }
  .right-content {
    right: ${(p) => p.theme.spacing.xxl};
  }

  ${(p) => {
    switch (p.theme.colorTheme) {
      case 'color':
        return `
          background-color: ${p.theme.color.background};
          box-shadow: 4px 4px 16px 2px rgba(0, 0, 0, 0.8);
        `;
      default:
        return `
          background-color: rgba(255, 255, 255, 0.75);
        `;
    }
  }};

  animation: 0.5s ease-out 0s 1 slideInFromBottom;

  @media ${(p) => p.theme.breakpoint.tablet} {
    .left-content {
      left: ${(p) => p.theme.spacing.md};
    }
    .right-content {
      right: ${(p) => p.theme.spacing.md};
    }
  }
`;

const Header: React.FC = () => {
  return (
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
};

export default Header;
