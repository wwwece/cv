import React from 'react';
import { Navigate } from 'react-router-dom';
import { pathAndLabel } from '../router/routes';

const FrontPage = () => {
  return <Navigate to={pathAndLabel('me').path} />;
};

export default FrontPage;
