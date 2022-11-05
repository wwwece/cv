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
