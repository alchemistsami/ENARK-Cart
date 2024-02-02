import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { FaShoppingCart } from 'react-icons/fa';

const NavBar = () => {
  const { cartItems } = useCart();

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        kidsSchool
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/courses">
            Courses
          </Nav.Link>
          <Nav.Link as={Link} to="/cart">
            Cart
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/cart">
            <FaShoppingCart size={20} />
            <span className="ml-2">{cartItems.length}</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
