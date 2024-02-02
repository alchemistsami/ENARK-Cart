import React from 'react';
import CartItem from '../Component/CartItem';
import { Link } from 'react-router-dom';
import { useCart } from '../Component/CartContext';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {(cartItems.length > 0) ? (
        <div>
          {cartItems.map((course) => (
            <CartItem key={course.id} course={course} onRemove={() => removeFromCart(course)} />
          ))}
        </div>
      ) : (

        <Container>
          <Row className="justify-content-center mt-5">
            <Col xs={6} className="text-center">
              <p>Your cart is empty.</p>
              <Link to="/">
                <Button variant="primary">Continue Shopping</Button>
              </Link>
            </Col>
          </Row>
        </Container>

      )}
    </div>
  );
};

export default Cart;
