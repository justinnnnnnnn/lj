import React from 'react';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_container';
import LoginFormContainer from './session_form/login_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Stonks from './chart/stonk'

const App = () => (
  <div className="app-div">    


    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/potato" component={Stonks}/>
      <Route path="/" component={GreetingContainer}/>
    </Switch>
  </div>
);

export default App;
