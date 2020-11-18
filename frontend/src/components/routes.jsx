import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import Home from './Home';
import Survey from './Survey'
import Charts from './Charts';




function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route path="/register" component={ Register } />
      <Route path="/login" component={ Login } />
      <Route path="/survey" component={ Survey } />
      <Route path="/charts" component={ Charts } />
      <Redirect from="*" to="/" />
    </Switch>
  );
}

export default Routes;