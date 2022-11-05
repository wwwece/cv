interface Route {
  path: string;
  index?: boolean;
  label: string;
  Element: () => JSX.Element;
  category?: import('./routes.enums').RouteCategory[];
}
