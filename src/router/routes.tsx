import React from 'react';
import i18n from '../i18n/config';
import { RouteCategory } from '../types/routes.enums';
import { slugify } from '../utils';
import FrontPage from '../views/FrontPage';
import Page from '../views/Page';

export const pathAndLabel = (key: string) => {
  const label = i18n.t(`route:${key}`);
  return { path: slugify(label), label };
};

const routes: Route[] = [
  {
    path: '/',
    label: i18n.t('route:frontPage'),
    index: true,
    Element: <FrontPage />,
  },
  {
    ...pathAndLabel('me'),
    Element: <Page slug="about-me" />,
    category: [RouteCategory.navBar],
  },
  {
    ...pathAndLabel('education'),
    Element: <Page slug="education" />,
    category: [RouteCategory.navBar],
  },
  {
    ...pathAndLabel('work'),
    Element: <Page slug="work" />,
    category: [RouteCategory.navBar],
  },
  {
    ...pathAndLabel('behindTheScenes'),
    Element: <Page slug="behind-the-scenes" />,
    category: [RouteCategory.navBar],
  },
];

export const navBarRoutes = routes.filter(({ category }) =>
  category?.includes(RouteCategory.navBar)
);

export default routes;
