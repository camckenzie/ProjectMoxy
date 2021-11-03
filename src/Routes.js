import Navbarbtn from './components/Navbarbtn/Navbarbtn';
import Menubtn from './components/Menubtn/Menubtn';
import { Router, Switch, Route, Link, useLocation, useHistory } from 'react-router-dom';
import { NavLink, Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Menubtn/Menubtn.css';
import Dashboard from './components/pages/Dashboard';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import { React, Component, useState } from 'react';
import history from './history';
//import { AnimatePresence } from "frame-motion";


//const location = useLocation();

export default class Routes extends Component {
    render() {
        return (
            //<AnimatePresence></AnimatePresence>
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/login" component={Login} />     
                    <Route path="/menubtn" component={Menubtn} />     
                </Switch>
            </Router>
        )
    }
}