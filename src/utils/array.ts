export const randomItem = (array: string[]) => {
  return array[Math.floor(Math.random() * array.length)];
};
