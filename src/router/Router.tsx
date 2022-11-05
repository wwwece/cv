import React, { FC, Suspense } from 'react';
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
    <Suspense fallback="Loading...">
      <ScrollToTop />

      <Routes>
        <RouterRoute path="/" element={<Layout />}>
          {routes.map(({ label, Element, ...props }) => (
            <RouterRoute
              key={props.path}
              element={
                <ViewWrapper title={label}>
                  <Element />
                </ViewWrapper>
              }
              {...props}
            />
          ))}
        </RouterRoute>
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default Router;
