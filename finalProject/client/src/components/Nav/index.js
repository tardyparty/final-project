import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";

function Header() {
  return (
    <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/home">Campers</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/store">Store</Nav.Link>
          <Nav.Link href="/search">Campground Search</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
          <Nav.Link href="/contact">Contact Us</Nav.Link>
          <Nav.Link href="/community">Community</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    // <Navbar fixed="top" bg="dark" variant="dark">
    //   <Navbar.Brand href="/home">Campers</Navbar.Brand>
    //   <Nav className="mr-auto">
    //     <Nav.Link href="/store">Store</Nav.Link>
    //     <Nav.Link href="/search">Campground Search</Nav.Link>
    //     <Nav.Link href="/blog">Blog</Nav.Link>
    //     <Nav.Link href="/contact">Contact Us</Nav.Link>
    //     <Nav.Link href="/community">Community</Nav.Link>
    //     <Nav.Link href="/login">Login</Nav.Link>
    //   </Nav>

    // </Navbar>
  )
}

export default Header;