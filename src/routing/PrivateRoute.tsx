import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { selectUser } from '@store/selectors/auth';
import { CLIENT_PATHS } from '@constants/paths';

interface IPrivateRouteProps {
  path: string;
  component: FC;
  exact?: boolean;
}

export const PrivateRoute: FC<IPrivateRouteProps> = ({ path, component, exact = false }) => {
  const user = useSelector(selectUser);

  return user ? <Route exact={exact} path={path} component={component} /> : <Redirect to={CLIENT_PATHS.login} />;
};
