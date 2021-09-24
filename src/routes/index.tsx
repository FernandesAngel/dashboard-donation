import React from 'react';
import { Switch } from 'react-router-dom';
import { Projects } from '../pages/Projects/Projects';
import SignIn from '../pages/SignIn/SignIn';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    {/* sign in */}
    <Route path="/" exact component={SignIn} isPrivate />
    <Route path="/projects" exact component={Projects} isPrivate />
    {/* dashboard */}
    {/* <Route path="/dashboard" exact component={} isPrivate /> */}
  </Switch>
);

export default Routes;
