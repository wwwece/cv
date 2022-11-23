import React, { useState, useCallback, useEffect, useMemo } from 'react';
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
import { StyledTileGrid, StyledTileGridRow } from './TileGrid.styled';

const TileGrid: React.FC = observer(() => {
  const { uiStore } = useStore();

  const [flippedCount, setFlippedCount] = useState(0);
  const [allFlipped, setAllFlipped] = useState(uiStore.introCompleted);

  const { tiles, totalTileCount } = useMemo(
    () =>
      getTiles({
        inColor: uiStore.colorTheme === 'color',
        text: uiStore.employer ? `Hello, ${uiStore.employer}!` : undefined,
      }),
    [uiStore.colorTheme, uiStore.employer]
  );

  const isAllTilesFlipped = flippedCount >= totalTileCount;
  const flippedPercent = flippedCount / totalTileCount;
  const showFlipAllButton =
    flippedPercent >= SHOW_FLIP_ALL_BUTTON_THRESHOLD ||
    // On smaller screens, make sure at least one tile is flipped before showing button
    (uiStore.windowDimensions.isTablet && flippedPercent >= 0.0001);

  /**
   * Flip all tiles after user has manually flipped certain percent of them (threshold)
   */
  useEffect(() => {
    if (flippedPercent >= FLIP_ALL_THRESHOLD) setAllFlipped(true);
  }, [flippedPercent]);

  /**
   * If all tiles are turner -> "Intro" is over
   */
  useEffect(() => {
    if (isAllTilesFlipped) {
      setTimeout(() => {
        uiStore.setIntroCompleted(true);
      }, 500);
    }
  }, [isAllTilesFlipped, uiStore]);

  /**
   * Check if "intro" was turned back on -> Initialize tile grid
   */
  useEffect(() => {
    if (!uiStore.introCompleted) {
      setFlippedCount(0);
      setAllFlipped(false);
    }
  }, [uiStore.introCompleted]);

  const handleFlipAll = () => {
    setAllFlipped(true);
  };

  const handleAddToFlippedCount = useCallback(() => {
    setFlippedCount((count) => ++count);
  }, []);

  return (
    <StyledTileGrid ejected={isAllTilesFlipped}>
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
        <StyledTileGridRow key={i}>
          {row.map((tile: TileType, j: number) => (
            <Tile
              key={j}
              allFlipped={allFlipped}
              onFlip={handleAddToFlippedCount}
              {...tile}
            />
          ))}
        </StyledTileGridRow>
      ))}
    </StyledTileGrid>
  );
});

export default TileGrid;
