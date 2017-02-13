import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { LoginPage, WelcomePage } from './containers';
import { App } from './components';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginPage} />
    <Route path="welcome" component={WelcomePage} />
  </Route>
);
