import { React, Component, useState } from 'react';
import { NavLink, Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menubtn.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Login from '../pages/Login';

class Menubtn extends Component {
  render() {
    return (
      <Router>
      <div className="buttons">
          <Button variant="light" className="buttonsW">Engagement Management</Button>
          <Button variant="light" className="buttonsW">
            <Link to="/">Home button test</Link>
            <div></div>
            <Link to="/dashboard">Dashboards</Link>
            <div></div>
            <Link to="/login">Login</Link>
          </Button>
          <Button variant="light" className="buttonsW">Resources</Button>
          <Button variant="light" className="buttonsW">Solutions Database</Button>
      </div>

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>

      </Switch>

      </Router>
    );
  }
}

export default Menubtn;
