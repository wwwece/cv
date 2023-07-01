import React, { FC } from 'react';
import {
  Route as RouterRoute,
  BrowserRouter,
  Routes,
  Navigate,
} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import ViewWrapper from './ViewWrapper';
import { Layout } from '../views/layout';
import defaultRoutes from './routes';
import RouterEvents from './RouterEvents';

interface Props {
  routes?: Route[];
}

const Router: FC<Props> = ({ routes = defaultRoutes }) => (
  <BrowserRouter>
    <RouterEvents />
    <ScrollToTop />

    <Routes>
      <RouterRoute path="/" element={<Layout />}>
        {routes.map(({ label, Element, ...props }) => (
          <RouterRoute
            key={props.path}
            element={<ViewWrapper title={label}>{Element}</ViewWrapper>}
            {...props}
          />
        ))}
      </RouterRoute>

      <RouterRoute path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
