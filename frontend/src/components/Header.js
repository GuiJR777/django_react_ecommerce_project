import React from 'react'

import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>

            <Navbar.Brand as={Link} to="/">Loja Profiça</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="header-links">
              <Nav className="mr-auto">

                <Nav.Link as={Link} to="/cart"><i className="fas fa-shopping-cart"></i> Carrinho</Nav.Link>

                <Nav.Link as={Link} to="/login"><i className="fas fa-user"></i> Login</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </header>
  )
}

export default Header
