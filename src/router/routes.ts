import { lazy } from 'react';
import i18n from '../i18n/config';
import { RouteCategory } from '../types/routes.enums';
import { slugify } from '../utils';

const FrontPage = lazy(() => import('../views/FrontPage'));
const Me = lazy(() => import('../views/Me'));
const Education = lazy(() => import('../views/Education'));
const Work = lazy(() => import('../views/Work'));

const pathAndLabel = (key: string) => {
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
  // TODO: notFoundRoute,
];

export const navBarRoutes = routes.filter(({ category }) =>
  category?.includes(RouteCategory.navBar)
);

export default routes;
