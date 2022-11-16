import styled from 'styled-components';

export interface StyledTileProps {
  flipped: boolean;
  color?: string;
}

export const StyledTile = styled.div<StyledTileProps>`
  position: relative;
  flex: 1;
  transform-style: preserve-3d;
  transition: 1000ms;
  user-select: none;
  ${(p) => p.theme.font.size[20]};
  text-shadow: 2px 1px ${(p) => p.theme.color.background};

  &.flipped {
    transform: rotateY(180deg);
  }

  .front,
  .back {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    left: 0;
    top: 0;
  }

  .front {
    box-shadow: ${(p) =>
      p.color ? '2px 2px 6px 2px rgba(0, 0, 0, 0.1)' : undefined};
    background-color: ${(p) => p.color ?? p.theme.color.primary};
    color: ${(p) => (p.color ? p.theme.color.foreground : '#a9b3bc')};

    transition: background-color 0.25s ease-in, box-shadow 0.5s;
  }

  .back {
    display: none;
    background-color: ${(p) => p.theme.color.background};
    transform: rotateY(180deg);
  }
`;
