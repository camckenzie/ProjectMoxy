import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Menu from './components/Menu';

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
