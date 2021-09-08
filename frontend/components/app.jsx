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
import StonkContainer from './stonk_page/stonk_page_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="app-div">    


    <Switch>
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <ProtectedRoute exact path="/stonks/:symbol" component={StonkContainer}/>
      <Route path="/" component={GreetingContainer}/>
    </Switch>
  </div>
);

export default App;
