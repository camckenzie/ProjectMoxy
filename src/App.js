import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Menu from './components/Menu';
import Engagement from './components/engagement/Engagement';
import Creation from './components/engagement/Creation'

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/loginform" component={LoginForm} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/menu/engagement" component={Engagement} />
        <Route exact path="menu/engagement/creation" component={Creation} />
      </Switch>
    </Router>
  );
}

export default App;
