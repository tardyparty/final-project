import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Login from "../loginBtn";
import "./style.css";

function Header() {
  return (
    <Navbar collapseOnSelect className="color-nav md-auto" fixed="top" expand="lg" variant="">
      <Navbar.Brand href="/home">
        <img alt="" 
        id="logo"
        src="/images/camper_logo2.png"
        className="d-inline-block" />{''}CAMPERS</Navbar.Brand>
      <Navbar.Toggle className="toggle navbar-text" aria-controls="responsive-navbar-nav">Menu</Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav" >
        
        <Nav className="mr-auto">
          <Nav.Link className="text-nav md-auto" href="/store">Store</Nav.Link>
          <Nav.Link className="text-nav md-auto" href="/search">Find Campgrounds</Nav.Link>
          <Nav.Link className="text-nav md-auto" href="/blog">Blog</Nav.Link>
          <Nav.Link className="text-nav md-auto" href="/contact">Contact Us</Nav.Link>
          <Nav.Link className="text-nav md-auto" href="/community">Community</Nav.Link>
          <Nav.Link className="text-nav md-auto">
            <Login />
          </Nav.Link>
        </Nav>
        <Nav>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;