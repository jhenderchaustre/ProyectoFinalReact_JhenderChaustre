import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Rhino Store®</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#link">Contactanos</Nav.Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Accesorios</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Remeras</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Jeans</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Zapatillas</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Verano 2024</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
    );
  };
  
  export default NavBar;
  