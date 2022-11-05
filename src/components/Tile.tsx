import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FLIP_DELAY = 8; // ms

const Container = styled.div<{ flipped: boolean; color?: string }>`
  position: relative;
  flex: 1;
  transform-style: preserve-3d;
  transition: 1000ms;
  user-select: none;

  /* transform: perspective(0) rotateY(var(--rotate-y, 50))
    translateY(var(--translate-y, 50)); */

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
    color: ${(p) => p.theme.color.foreground};
  }

  .back {
    display: none;
    background-color: ${(p) => p.theme.color.background};
    transform: rotateY(180deg);
  }
`;

interface Props extends TileType {
  allFlipped?: boolean;
  onFlip: () => void;
}

const Tile: React.FC<Props> = ({
  content,
  index,
  color,
  allFlipped,
  onFlip,
}) => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (allFlipped && !flipped) {
      setTimeout(() => {
        setFlipped(true);
        onFlip();
      }, FLIP_DELAY * index);
    }
  }, [allFlipped, flipped, index, onFlip]);

  const handleMouseEnter = () => {
    setFlipped(true);
    onFlip();
  };

  return (
    <Container
      className={flipped ? ' flipped' : ''}
      flipped={flipped}
      color={color}
    >
      <div className="front" onMouseEnter={handleMouseEnter}>
        {content}
      </div>
      <div className="back"></div>
    </Container>
  );
};

export default Tile;
