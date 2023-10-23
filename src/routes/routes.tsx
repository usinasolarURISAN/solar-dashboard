import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Background } from '~/components';
import { Demo, NotFound } from '../pages';
import { DashboardRouter } from './components';
import PrivateRoute from './Private';

const Routes: React.FC = () => (
  <Background>
    <BrowserRouter>
      <Switch>
        <DashboardRouter path="/" />

        <PrivateRoute path="/user/:id" component={Demo} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Background>
);

export default Routes;
