import { randomItem } from '../array';

const array = ['a', 'b', 'c'];

it('always returns random item from a given array', () => {
  [...Array(1000)].forEach(() => {
    const randomValue = randomItem(array);
    expect(array.includes(randomValue)).toBe(true);
  });
});
