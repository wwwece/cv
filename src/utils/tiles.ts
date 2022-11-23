import { randomColor } from '../theme';
import { getWindowDimensions } from './window';

export const FLIP_ALL_THRESHOLD = 0.25; // percent
export const SHOW_FLIP_ALL_BUTTON_THRESHOLD = 0.02; // percent

export const ROWS_COUNT = 21;
export const COLS_COUNT = 40;
export const COLS_COUNT_TABLET = 20;
export const COLS_COUNT_MOBILE = 15;
export const DEFAULT_TEXT = 'Hell, world!';

interface GetTiles {
  rowCount?: number;
  colCount?: number;
  text?: string;
  inColor?: boolean;
}

export const getTiles = (props: GetTiles = {}) => {
  const { isTablet, isMobile } = getWindowDimensions();
  const {
    rowCount = ROWS_COUNT,
    colCount = isMobile
      ? COLS_COUNT_MOBILE
      : isTablet
      ? COLS_COUNT_TABLET
      : COLS_COUNT,
    text = DEFAULT_TEXT,
    inColor,
  } = props;

  const welcomeText = text.length <= colCount ? text : DEFAULT_TEXT;

  const row: string[] = Array(colCount).fill('');
  const rows: string[][] = Array(rowCount).fill(row);

  const textLineEmptyChars = colCount - welcomeText.length;
  const textPrefixCount = Math.ceil(textLineEmptyChars / 2);
  const textPostfixCount = Math.floor(textLineEmptyChars / 2);
  const textLine = [
    ...Array(textPrefixCount).fill(''),
    ...welcomeText.split(''),
    ...Array(textPostfixCount).fill(''),
  ];

  rows.splice(rowCount / 2, 1, textLine);

  const tiles: TileType[][] = rows.map((row, i) =>
    row.map((content, j) => ({
      content,
      index: i * rowCount + (j + 1),
      color: inColor ? randomColor() : undefined,
    }))
  );

  return {
    tiles,
    totalTileCount: rowCount * colCount,
  };
};
