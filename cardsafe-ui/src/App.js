import React from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom'; 
import Entry from './Components/Entry'; 
import Login from './Components/Login'; 
import Kickstarter from './Components/Kickstarter'; 
import Signup from './Components/Signup'; 
import VerifyEmail from './Components/VerifyEmail';
import Dashboard from './Components/Dashboard';

import './App.css';

function App() {
  return (
    <main>
      <Route exact path={"/"} component={Entry} />
      <Route path={"/kickstarter"} component={Kickstarter} />
      <Route path={"/login"} component={Login} />
      <Route path={"/signup"} component={Signup} />
      <Route path={"/verifyemail"} component={VerifyEmail} />
      <Route path={"/dashboard"} component={Dashboard} />
    </main>
  );
}

export default App;
