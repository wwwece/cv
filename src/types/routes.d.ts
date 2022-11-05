interface Route {
  path: string;
  index?: boolean;
  title: string;
  Element: () => JSX.Element;
}
