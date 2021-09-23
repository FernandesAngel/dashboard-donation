import React from 'react';
import { Switch } from 'react-router-dom';
import SignIn from '../pages/SignIn/SignIn';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    {/* sign in */}
    <Route path="/" exact component={SignIn} isPrivate={false} />
    {/* dashboard */}
    {/* <Route path="/dashboard" exact component={} isPrivate /> */}
  </Switch>
);

export default Routes;
