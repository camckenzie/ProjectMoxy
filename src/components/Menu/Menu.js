import { React, Component, useState } from 'react';
import { NavLink, Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import engagementmod from './images/engagementmod.png';
import dashboard from './images/dashboard.png';
import resources from './images/resources.png';
import database from './images/database.png';

class Menu extends Component {
  render() {
    return (
      <div className="buttons">
            <Button variant="light" className="buttonsW">
                <span className="buttonTitle">Engagement Management</span>
                <img className="buttonem" src={engagementmod} />            
                <span className="buttonDescription">Defining and modeling outcomes for a client engagement along with KPIs and timelines</span>
            </Button>
            <Button variant="light" className="buttonsW">
                <span className="buttonTitle">Dashboard</span>
                <img className="buttondb" src={dashboard} />  
                <span className="buttonDescription">Comprehensive view of a running engagement tracking progress and costs</span>
            </Button>
            <Button variant="light" className="buttonsW">
                <span className="buttonTitle">Resources</span>
                <img className="buttondb" src={resources} /> 
                <span className="buttonDescription">Library of pre-built documents ranging from charts to example reports</span>
            </Button>
            <Button variant="light" className="buttonsW">
                <span className="buttonTitle">Solutions Database</span>
                <img className="buttondb" src={database} /> 
                <span className="buttonDescription">Successfully delivered outcomes and the components of those outcomes</span>
            </Button>
      </div>
    );
  }
}

export default Menu;
