import React from 'react'
import Sellcard from '../components/sellcard'
import { Stack,Navbar,Nav,NavDropdown,Container,Button,Form,FormControl,Carousel } from 'react-bootstrap';
import Addcard from '../components/addcard';

//homepage
function Homepage() {
 //landing page with products

  return (
    <div>
     <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Cgbros</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Container fluid>
<Carousel variant="dark">
 
  <Carousel.Item>
	<img
	  className="d-block w-100"
	  src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=480&q=80"
	  alt="First slide"
	/>
	<Carousel.Caption>
	  <h5>Test </h5>
	  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
	</Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
	<img
	  className="d-block w-100"
	  src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=480&q=80"
	  alt="SECOND slide"
	/>
	<Carousel.Caption>
	  <h5>Test 44</h5>
	  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
	</Carousel.Caption>
      </Carousel.Item>
  
</Carousel>
  
  
  
   </Container>










	    </div>
  )
}

export default Homepage