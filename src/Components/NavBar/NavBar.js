import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Workshop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="adminInterface">Admin</Nav.Link>
            <Nav.Link href="AboutUs">AboutUs</Nav.Link>
            <Nav.Link href="Users">Users</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default NavBar
