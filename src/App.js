import logo from './logo.svg';
import './App.css';
import Navbarbtn from './components/Navbarbtn/Navbarbtn';
import Menubtn from './components/Menubtn/Menubtn';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { NavLink, Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Menubtn/Menubtn.css';
import Dashboard from './components/pages/Dashboard';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import { React, Component, useState } from 'react';
import history from './history';



class App extends Component {
  render() {
    return (
      <div className="App">
        <body>
          <h1>Hello</h1>
        </body>
      </div>
     );
    }
  }

export default App;
