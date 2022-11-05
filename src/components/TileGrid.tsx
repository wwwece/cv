import React, { useState, useCallback, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import Tile from './Tile';
import Button from './Button';
import { useStore } from '../store';
import {
  FLIP_ALL_THRESHOLD,
  getTiles,
  SHOW_FLIP_ALL_BUTTON_THRESHOLD,
} from '../utils';
import ColorThemeButton from './ColorThemeButton';
import { observer } from 'mobx-react-lite';

const Container = styled.div<{ ejected: boolean }>`
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

const Row = styled.div`
  display: flex;
  flex: 1;
  justify-content: stretch;
`;

const CardGrid: React.FC = observer(() => {
  const { uiStore } = useStore();

  const { tiles, totalTileCount } = useMemo(
    () => getTiles({ inColor: uiStore.colorTheme === 'color' }),
    [uiStore.colorTheme]
  );

  const [flippedCount, setFlippedCount] = useState(0);
  const [allFlipped, setAllFlipped] = useState(false);

  const isAllTilesFlipped = flippedCount >= totalTileCount;
  const flippedPercent = flippedCount / totalTileCount;
  const showFlipAllButton = flippedPercent >= SHOW_FLIP_ALL_BUTTON_THRESHOLD;

  // Flip all tiles after user has manually flipped certain percent of them (threshold)
  useEffect(() => {
    if (flippedPercent >= FLIP_ALL_THRESHOLD) setAllFlipped(true);
  }, [flippedPercent]);

  useEffect(() => {
    if (isAllTilesFlipped) {
      setTimeout(() => {
        uiStore.setIntroCompeleted(true);
      }, 500);
    }
  }, [isAllTilesFlipped, uiStore]);

  const handleFlipAll = () => {
    setAllFlipped(true);
  };

  const handleAddToFlippedCount = useCallback(() => {
    setFlippedCount((count) => ++count);
  }, []);

  return (
    <Container ejected={isAllTilesFlipped}>
      {!allFlipped && <ColorThemeButton className="color-theme-button" />}

      {showFlipAllButton && !allFlipped && (
        <Button
          textKey="action:flipAll"
          onClick={handleFlipAll}
          className="flip-all-button"
          negative
        />
      )}

      {tiles.map((row, i) => (
        <Row key={i}>
          {row.map((tile: TileType, j: number) => (
            <Tile
              key={j}
              allFlipped={allFlipped}
              onFlip={handleAddToFlippedCount}
              {...tile}
            />
          ))}
        </Row>
      ))}
    </Container>
  );
});

export default CardGrid;
