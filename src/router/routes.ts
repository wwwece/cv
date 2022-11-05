import i18n from '../i18n/config';
import { RouteCategory } from '../types/routes.enums';
import { slugify } from '../utils';
import BehindTheScenes from '../views/BehindTheScenes';
import Education from '../views/Education';
import FrontPage from '../views/FrontPage';
import Me from '../views/Me';
import Work from '../views/Work';

export const pathAndLabel = (key: string) => {
  const label = i18n.t(`route:${key}`);
  return { path: slugify(label), label };
};

const routes: Route[] = [
  {
    path: '/',
    label: i18n.t('route:frontPage'),
    index: true,
    Element: FrontPage,
  },
  {
    ...pathAndLabel('me'),
    Element: Me,
    category: [RouteCategory.navBar],
  },
  {
    ...pathAndLabel('education'),
    Element: Education,
    category: [RouteCategory.navBar],
  },
  {
    ...pathAndLabel('work'),
    Element: Work,
    category: [RouteCategory.navBar],
  },
  {
    ...pathAndLabel('behindTheScenes'),
    Element: BehindTheScenes,
    category: [RouteCategory.navBar],
  },
];

export const navBarRoutes = routes.filter(({ category }) =>
  category?.includes(RouteCategory.navBar)
);

export default routes;
