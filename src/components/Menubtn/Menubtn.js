import { React, Component, useState } from 'react';
import { NavLink, Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menubtn.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Login from '../pages/Login';
import history from '../../history';


class Menubtn extends Component {
  render() {
    return (
      <Router>
      <div className="buttons">
          <Button variant="light" className="buttonsW">Engagement Management</Button>
          {/* <Button variant="light" className="buttonsW" onClick={() => history.push('/dashboard')}>Dashboards</Button> */}
          <Button variant="light" className="buttonsW">Dashboard</Button>
          <Button variant="light" className="buttonsW">Resources</Button>
          <Button variant="light" className="buttonsW">Solutions Database</Button>
      </div>

      </Router>
    );
  }
}

export default Menubtn;
