import { randomColor } from '../theme';

export const FLIP_ALL_THRESHOLD = 0.15;
export const SHOW_FLIP_ALL_BUTTON_THRESHOLD = 0.02;

export const ROWS_COUNT = 21;
export const COLS_COUNT = 40;
const DEFAULT_TEXT = 'Hell, world!';

interface GetTiles {
  rowCount?: number;
  colCount?: number;
  text?: string;
  inColor?: boolean;
}

export const getTiles = (props: GetTiles = {}) => {
  const {
    rowCount = ROWS_COUNT,
    colCount = COLS_COUNT,
    text = DEFAULT_TEXT,
    inColor,
  } = props;

  const row: string[] = Array(colCount).fill('');
  const rows: string[][] = Array(rowCount).fill(row);

  const textLineEmptyChars = colCount - text.length;
  const textPrefixCount = Math.ceil(textLineEmptyChars / 2);
  const textPostfixCount = Math.floor(textLineEmptyChars / 2);
  const textLine = [
    ...Array(textPrefixCount).fill(''),
    ...text.split(''),
    ...Array(textPostfixCount).fill(''),
  ];

  rows.splice(rowCount / 2, 1, textLine);

  const tiles: TileType[][] = rows.map((row, i) =>
    row.map((content, j) => ({
      content,
      index: i * ROWS_COUNT + (j + 1),
      color: inColor ? randomColor() : undefined,
    }))
  );

  return {
    tiles,
    totalTileCount: rowCount * colCount,
  };
};
