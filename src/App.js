import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Menu from './components/Menu/Menu';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";
import Dashboard from './components/pages/Dashboard/Dashboard';
import EngagementManagement from './components/pages/EngagementManagement/EngagementMangement';
import Resources from './components/pages/Resources/Resources';
import SolutionsDatabase from './components/pages/SolutionsDatabase/SolutionsDatabase';
function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/loginform" component={LoginForm} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/engagementmanagement" component={EngagementManagement} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/solutionsdatabase" component={SolutionsDatabase} />
      </Switch>
    </Router>

    
  );
}

export default App;
