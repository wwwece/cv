import { COLS_COUNT, DEFAULT_TEXT, getTiles, ROWS_COUNT } from '../tiles';

test('10x10 tile array', () => {
  const { tiles, totalTileCount } = getTiles({
    rowCount: 10,
    colCount: 10,
    text: 'TEXT',
    inColor: false,
  });

  expect(totalTileCount).toBe(100);

  expect(tiles.length).toBe(10);

  tiles.forEach((tileRow) => {
    // Each row should have length of 10
    expect(tileRow.length).toBe(10);
    tileRow.forEach((tile) => {
      // Tiles should not have eny color value
      expect(tile.color).not.toBeDefined();
    });
  });

  // Text should appear in the middle of the tile grid and
  // all other tiles should have empty string as a content.
  tiles.slice(0, 5).forEach((tileRow) => {
    tileRow.forEach((tile) => {
      expect(tile.content).toBe('');
    });
  });
  expect(tiles[5][0].content).toBe('');
  expect(tiles[5][1].content).toBe('');
  expect(tiles[5][2].content).toBe('');
  expect(tiles[5][3].content).toBe('T');
  expect(tiles[5][4].content).toBe('E');
  expect(tiles[5][5].content).toBe('X');
  expect(tiles[5][6].content).toBe('T');
  expect(tiles[5][7].content).toBe('');
  expect(tiles[5][8].content).toBe('');
  expect(tiles[5][9].content).toBe('');
  tiles.slice(6, 9).forEach((tileRow) => {
    tileRow.forEach((tile) => {
      expect(tile.content).toBe('');
    });
  });

  // Test that index values are correct:
  expect(tiles[0][0].index).toBe(1);
  expect(tiles[0][1].index).toBe(2);
  expect(tiles[0][9].index).toBe(10);
  expect(tiles[1][0].index).toBe(11);
  expect(tiles[9][9].index).toBe(100);
});

test('default array', () => {
  const { tiles, totalTileCount } = getTiles({
    rowCount: ROWS_COUNT,
    colCount: COLS_COUNT,
    text: DEFAULT_TEXT,
  });

  expect(totalTileCount).toBe(ROWS_COUNT * COLS_COUNT);

  // Check that the text is in right position
  expect(tiles[8][9].content).toBe('H');
  expect(tiles[8][20].content).toBe('!');
});
