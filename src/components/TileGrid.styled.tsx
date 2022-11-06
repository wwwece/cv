import styled from 'styled-components';

interface StyledTileGridProps {
  ejected: boolean;
}

export const StyledTileGrid = styled.div<StyledTileGridProps>`
  display: ${(p) => (p.ejected ? 'none' : 'flex')};
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  justify-content: stretch;
  height: 100vh;
  width: 100vw;

  button {
    z-index: 2;
    position: fixed;
    top: 2rem;
    &.flip-all-button {
      right: 2rem;
    }
    &.color-theme-button {
      left: 2rem;
    }
  }
`;

export const StyledTileGridRow = styled.div`
  display: flex;
  flex: 1;
  justify-content: stretch;
`;
