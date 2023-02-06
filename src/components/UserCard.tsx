import React from "react";
import { Container, Col, Card, Row } from "react-bootstrap";

type CartProps = {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
};

const UserCard = ({ id, name, email, address }: CartProps) => {
  return (
    <Col xs={12} md={6} lg={4} key={id} className='mb-3'>
      <Card bg='light' text='dark'>
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>
          <Card.Text>Email: {email}</Card.Text>
          <Card.Text>Address: {address.street}</Card.Text>
          <Card.Text>Suite: {address.suite}</Card.Text>
          <Card.Text>City: {address.city}</Card.Text>
          <Card.Text>Zipcode: {address.zipcode}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default UserCard;
