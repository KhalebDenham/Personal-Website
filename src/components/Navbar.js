import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import NavItem from "react-bootstrap/NavItem";
import { Navbar } from "react-bootstrap";
import NavLink from "react-bootstrap/NavLink";

function ColorSchemesExample() { //This is a modified navbar in which I utilized the nav items and dropdown options.
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark"> 
        <Container>
          <Navbar.Brand href="/home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/mountain">Mountain</Nav.Link>
            <Nav.Link href="/river">River</Nav.Link>
            <Dropdown as={NavItem}>
              <Dropdown.Toggle as={NavLink}>Click to see more…</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Hello there!</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default ColorSchemesExample;
