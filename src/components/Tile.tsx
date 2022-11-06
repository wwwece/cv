import React, { useState, useEffect } from 'react';
import { StyledTile } from './Tile.styled';

const FLIP_DELAY = 4; // ms

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
    <StyledTile
      className={flipped ? ' flipped' : ''}
      flipped={flipped}
      color={color}
    >
      <div className="front" onMouseEnter={handleMouseEnter}>
        {content}
      </div>
      <div className="back"></div>
    </StyledTile>
  );
};

export default Tile;
