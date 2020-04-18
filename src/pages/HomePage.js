import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

const HomePage = () => {
  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/"><i class="fas fa-laptop-medical"></i> Emergency Monitoring System</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Nav>
          <LinkContainer to="/admin/login">
            <Nav.Link><i className="fas fa-sign-in-alt"></i> Admin Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/admin/register">
            <Nav.Link><i class="fas fa-user-plus"></i> Admin SignUp</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
      <Card className="text-center mx-auto">
        <Card.Body>
          <Card.Title>Ambulance Login</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Link to="/ambulance/login" variant="primary">
            Sign In <i className="fas fa-sign-in-alt"></i>
          </Link>
        </Card.Footer>
      </Card>
      <br />
      <br />
      <Card className="text-center mx-auto">
        <Card.Body>
          <Card.Title>Hospital Login</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Link to="/hospital/login" variant="primary">
            Sign In <i className="fas fa-sign-in-alt"></i>
          </Link>
        </Card.Footer>
      </Card>
    </Fragment>
  );
};

export default HomePage;
