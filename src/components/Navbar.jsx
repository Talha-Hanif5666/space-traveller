import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';

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
          <span style={{ fontWeight: 'bold', fontSize: '30px', marginLeft: '10px' }}>Space Traveler&apos;s Hub</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto" as="ul" variant="pills">
            <Nav.Item as="li" className="mx-2">
              <NavLink to="/rockets" style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}>Rockets</NavLink>
            </Nav.Item>
            <Nav.Item as="li" className="mx-2">
              <NavLink to="/missions" style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}>Missions</NavLink>
            </Nav.Item>
            <Nav.Item as="li" className="mx-2">
              <NavLink to="/my-profile" style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}>My Profile</NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
