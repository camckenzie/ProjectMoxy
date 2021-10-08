import { React, Component } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchIcon from '@mui/icons-material/Search';
import './Navbarbtn.css';
import RefreshIcon from '@mui/icons-material/Refresh';
import MenuIcon from '@mui/icons-material/Menu';



class Navbarbtn extends Component {
  render() {
    return (
      <Navbar expand="lg" variant="light" bg="light" fixed="top" left="5">
        <Container>
          <Nav href="#" className="navBar">
            <MenuIcon className="menuIcon" expand="lg"/>
            <SearchIcon className="searchIcon"/>
            <RefreshIcon className="refreshIcon"/>
            
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Navbarbtn;
