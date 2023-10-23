import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Drawable } from '~/components';
import { About, Config, Dashboard, Devices } from '~/pages';
import { Wrapper } from './styles';

class DashboardRouter extends Route {
  render(): React.ReactNode {
    return (
      <Wrapper>
        <Drawable />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/devices" exact component={Devices} />
          <Route path="/config" exact component={Config} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Wrapper>
    );
  }
}

export default DashboardRouter;
