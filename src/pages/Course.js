import React from 'react';
import { courses } from '../Component/CourseData';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useCart } from '../Component/CartContext';

const Courses = () => {
  const { addToCart } = useCart();

  return (
    <>
      <Row xs={1} md={2} className="g-4">
        {courses.map((course, idx) => (
          <Col key={idx}>
            <Card style={{ height: '100%' }}>
              <Card.Img
                variant="top"
                src={course.img}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.description}</Card.Text>
                <Card.Title>{course.price}</Card.Title>
                <div style={{ marginTop: 'auto' }}>
                  <Button
                    variant="primary"
                    onClick={() => {
                      addToCart(course);
                    }}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Courses;


