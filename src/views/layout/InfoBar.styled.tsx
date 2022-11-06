import styled from 'styled-components';

export const StyledInfoBar = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: ${(p) => p.theme.spacing.lg};

  background-color: ${(p) => p.theme.color.background};
  color: ${(p) => p.theme.color.foreground};
  text-align: center;
  ${(p) => p.theme.font.size[16]};
  font-family: ${(p) => p.theme.font.secondary};

  animation: 1.2s ease-out 0s 1 slideInFromTop;

  > * {
    :not(:first-child) {
      margin-left: ${(p) => p.theme.spacing.xxl};
    }
  }

  @media ${(p) => p.theme.breakpoint.mobile} {
    position: relative;
    flex-direction: column;
    align-items: center;
    padding-top: ${(p) => p.theme.spacing.xxl};
    padding-bottom: ${(p) => p.theme.spacing.xxl};
    ${(p) => p.theme.font.size[18]};

    > * {
      :not(:first-child) {
        margin-left: 0;
        margin-top: ${(p) => p.theme.spacing.lg};
      }
    }
  }
`;

export const StyledInfoItem = styled.div`
  > a {
    display: flex;
    align-items: center;
    color: ${(p) => p.theme.color.foreground};
    text-decoration: none;
    user-select: none;

    :hover {
      text-decoration: underline;
    }

    svg {
      margin: 0 ${(p) => p.theme.spacing.sm};
    }
  }
`;
