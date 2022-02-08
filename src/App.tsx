import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from '@routing/AppRouter';

export const App: FC = () => (
  <Router>
    <AppRouter />
  </Router>
);
