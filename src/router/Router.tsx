import React, { FC } from 'react';
import { Route as RouterRoute, BrowserRouter, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import ViewWrapper from './ViewWrapper';
import { Layout } from '../views/layout';
import defaultRoutes from './routes';

interface Props {
  routes?: Route[];
}

const Router: FC<Props> = ({ routes = defaultRoutes }) => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <RouterRoute path="/" element={<Layout />}>
        {routes.map(({ title, Element, ...props }) => (
          <RouterRoute
            key={props.path}
            element={
              <ViewWrapper title={title}>
                <Element />
              </ViewWrapper>
            }
            {...props}
          />
        ))}
      </RouterRoute>
    </Routes>
  </BrowserRouter>
);

export default Router;
