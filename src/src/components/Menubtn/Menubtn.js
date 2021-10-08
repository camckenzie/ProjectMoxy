import { React, Component } from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menubtn.css';




class Menubtn extends Component {
  render() {
    return (
      <div className="buttons">
          <Button variant="light" className="buttonsW">Engagement Management</Button>
          <Button variant="light" className="buttonsW">Dashboards</Button>
          <Button variant="light" className="buttonsW">Resources</Button>
          <Button variant="light" className="buttonsW">Solutions Database</Button>
      </div>
    );
  }
}

export default Menubtn;
