import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-secondary p-4"  bg="secondary" variant="dark" >
      <Container>
        <Row>
          <Col>
            <p>Our Company Name</p>
            <p>123 Main Street, Cityville</p>
            <p>Country</p>
            <p>Email: info@company.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
