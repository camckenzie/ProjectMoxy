import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Menu from './components/Menu/Menu';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";
import Dashboard from './components/pages/Dashboard';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/loginform" component={LoginForm} />
        <Route exact path="/menu" component={Menu} />
      </Switch>
    </Router>

    
  );
}

export default App;
