import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FLIP_DELAY = 4; // ms

const Container = styled.div<{ flipped: boolean; color?: string }>`
  position: relative;
  flex: 1;
  transform-style: preserve-3d;
  transition: 1000ms;
  user-select: none;

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

    transition: background-color 0.25s ease-in, box-shadow 0.5s;
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

  // If allFlipped flag was turner on, flip all tiles.
  // The delay is increasing for each tile in order to create a chain reaction.
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (allFlipped && !flipped) {
        setFlipped(true);
        onFlip();
      }
    }, FLIP_DELAY * index);

    return () => clearTimeout(timeout);
  }, [allFlipped, flipped, index, onFlip]);

  // Check if "allFlipped" changed back to false.
  // In that case all tiles should be visible again.
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!allFlipped) setFlipped(false);
    }, FLIP_DELAY * index);

    return () => clearTimeout(timeout);
  }, [allFlipped, index]);

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
