import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import Home from './Home/indes';



function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route path="/register" component={ Register } />
      <Route path="/login" component={ Login } />
    </Switch>
  );
}

export default Routes;