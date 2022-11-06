interface Route {
  path: string;
  index?: boolean;
  label: string;
  Element: JSX.Element | null;
  category?: import('./routes.enums').RouteCategory[];
}
