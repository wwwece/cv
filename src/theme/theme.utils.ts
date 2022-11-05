import { randomItem } from '../utils';

export const Colors = {
  primary: '#21262b',
  secondary: '',
  grey: '#21262b',
  accent: '',
  foreground: '#fff',
  background: '#21262b',
  text: '#21262b',
  error: '#b30000',
  success: 'green',
  basket: [
    '#F94144',
    '#F3722C',
    '#F8961E',
    '#F9844A',
    '#F9C74F',
    '#90BE6D',
    '#43AA8B',
    '#4D908E',
    '#577590',
    '#277DA1',
  ],
};

export enum Breakpoint {
  mobile = 800,
  tablet = 1000,
  laptop = 1200,
}

export const fontSize = (sm: number, md: number) => `
  font-size: ${md}rem;
  @media (max-width: ${Breakpoint.mobile}px) {
    font-size: ${sm}rem;
  }
`;

export const randomColor = (colorBasket: string[] = Colors.basket) =>
  randomItem(colorBasket);
