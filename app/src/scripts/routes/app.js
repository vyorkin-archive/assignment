import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

export default (
  <Route name='app' handler={require('../layouts/app')} path='/'>
    <DefaultRoute name='index' handler={require('../pages/Index')} />
    <Route name='sign-up' handler={require('../pages/SignUp')} path='/sign-up' />
    <Route name='sign-in' handler={require('../pages/SignIn')} path='/sign-in' />
    <Route name='playground' handler={require('../pages/Playground')} path='/playground' />
    <NotFoundRoute handler={require('../pages/NotFound')} name='not-found' />
  </Route>
);

