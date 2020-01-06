import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/home">Campers</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/store">Store</Nav.Link>
      <Nav.Link href="/search">Campground Search</Nav.Link>
      <Nav.Link href="/blog">Blog</Nav.Link>
      <Nav.Link href="/contact">Contact Us</Nav.Link>
      <Nav.Link href="/community">Community</Nav.Link>
      <Nav.Link href="/login">Login</Nav.Link>
    </Nav>
  </Navbar>
  )
}

export default Header;