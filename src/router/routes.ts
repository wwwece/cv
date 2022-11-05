import FrontPage from '../views/FrontPage';
import Me from '../views/Me';

const routes: Route[] = [
  {
    path: '/',
    index: true,
    title: 'frontPage',
    Element: FrontPage,
  },
  {
    path: '/me',
    title: 'frontPage',
    Element: Me,
  },
  // TODO: notFoundRoute,
];

export default routes;
