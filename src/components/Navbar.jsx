import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/planet.png'
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto" as='ul'>
            <Nav.Item as="li"  className='mx-2'>
              <Link to="/rockets">Rockets</Link>
            </Nav.Item>
            <Nav.Item as="li" className='mx-2'>
              <Link to="/home">Missions</Link>
            </Nav.Item>
            <Nav.Item as="li" className='mx-2'>
              <Link to="/my-profile">My Profile</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;