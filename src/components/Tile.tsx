import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div<{ flipped: boolean }>`
  position: relative;
  flex: 1;
  transform-style: preserve-3d;
  transition: 1000ms;
  user-select: none;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 1rem;

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
    /* box-shadow: 2px 2px 6px 2px rgba(0, 0, 0, 0.1); */
    background-color: #282c34;
    color: white;
  }

  .back {
    display: none;
    background-color: black;
    transform: rotateY(180deg);
  }
`;

interface Props extends TileType {
  allFlipped?: boolean;
  onFlip: () => void;
}

const Tile: React.FC<Props> = ({ content, index, allFlipped, onFlip }) => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (allFlipped && !flipped) {
      setTimeout(() => {
        setFlipped(true);
        onFlip();
      }, 8 * index);
    }
  }, [allFlipped, flipped, index, onFlip]);

  const handleMouseEnter = () => {
    setFlipped(true);
    onFlip();
  };

  return (
    <Container className={flipped ? ' flipped' : ''} flipped={flipped}>
      <div className="front" onMouseEnter={handleMouseEnter}>
        {content}
      </div>
      <div className="back"></div>
    </Container>
  );
};

export default Tile;
