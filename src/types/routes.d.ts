interface Route {
  path: string;
  index?: boolean;
  label: string;
  Element: LazyExoticComponent<() => Element>;
  category?: import('./routes.enums').RouteCategory[];
}
