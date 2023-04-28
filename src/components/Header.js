import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Shopping</Navbar.Brand>
            <Nav.Link href="#action1">Men's Clothing</Nav.Link>
            <Nav.Link href="#action2">Women's Clothing</Nav.Link>    
            <Nav.Link href="#action3">Jewellery</Nav.Link>   
            <Nav.Link href="#action4">Electronics</Nav.Link>       
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
    </Navbar>
  );
} 

/*
add logo */

export default Header;