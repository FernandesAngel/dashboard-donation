import React from 'react';
import { Switch } from 'react-router-dom';
import CreateProject from '../pages/CreateProject/CreateProject';
import Donations from '../pages/Donations/Donations';
import EditProfile from '../pages/EditProfile/EditProfile';
import EditProject from '../pages/EditProject/EditProject';
import { Projects } from '../pages/Projects/Projects';
import SignIn from '../pages/SignIn/SignIn';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    {/* sign in */}
    <Route path="/" exact component={SignIn} />
    <Route path="/projects" exact component={Projects} isPrivate />
    <Route path="/projects/create" exact component={CreateProject} isPrivate />
    <Route path="/projects/edit/:id" exact component={EditProject} isPrivate />
    <Route path="/profile" exact component={EditProfile} isPrivate />
    <Route path="/donations/:id" exact component={Donations} isPrivate />
    {/* dashboard */}
    {/* <Route path="/dashboard" exact component={} isPrivate /> */}
  </Switch>
);

export default Routes;
