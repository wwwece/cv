import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
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
          box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.5);
        `;
    }
  }};

  animation: 0.6s ease-out 0s 1 slideInFromBottom;

  transition: 0.5s;

  @media ${(p) => p.theme.breakpoint.tablet} {
    .left-content {
      left: ${(p) => p.theme.spacing.md};
    }
    .right-content {
      right: ${(p) => p.theme.spacing.md};
    }
  }

  @media ${(p) => p.theme.breakpoint.mobile} {
    .left-content {
      top: ${(p) => p.theme.spacing.sm};
      left: ${(p) => p.theme.spacing.sm};
    }
    .right-content {
      top: ${(p) => p.theme.spacing.md};
    }
  }
`;
