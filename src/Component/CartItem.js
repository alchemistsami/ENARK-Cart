import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const CartItem = ({ key, course, onRemove }) => {


  return (
    <Card style={{ width: '100%', marginBottom: '10px' }}>
      <Row>
        <Col md={3}>
          <Card.Img
            src={course.img}
            alt={course.title}
            style={{ height: '100%', objectFit: 'cover' }}
          />
        </Col>
        <Col md={9}>{key}
          <Card.Body>
            <Card.Title>{course.title}</Card.Title>
            <Card.Text>{course.description}</Card.Text>
            <Card.Text>Price: {course.price}</Card.Text>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="danger" onClick={() => onRemove(course)}>
                Remove
              </Button>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default CartItem;
