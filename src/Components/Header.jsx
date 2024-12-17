import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">Admin Dashboard</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#">Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
