import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from '@routing/PrivateRoute';
import { Sidebar } from '@components/modules/Sidebar';
import { LoginPage } from '@components/pages/LoginPage';
import { CLIENT_PATHS } from '@constants/paths';

export const AppRouter: FC = () => (
  <Switch>
    <Redirect exact from={CLIENT_PATHS.main} to={CLIENT_PATHS.sidebar} />
    <Redirect exact from={CLIENT_PATHS.sidebar} to={`${CLIENT_PATHS.sidebar}${CLIENT_PATHS.vehicle}`} />
    <Route path={CLIENT_PATHS.login} component={LoginPage} />
    <PrivateRoute path={CLIENT_PATHS.sidebar} component={Sidebar} />
  </Switch>
);
