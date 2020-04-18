import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav';
import green from '../images/green.jpg';
import blue from '../images/blue.jpg';
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
    <br />
      <Container fluid="md">
        <p className="justify-content-md-center" style={{fontSize : "30px", textAlign : 'justify'}}>Emergency Monitoring System provides an interface for Paramedics to connect
         to their network hospitals and provide them with relevant informations about the patient they are catering 
         to so that the latter can be provide a better and efficient service when the patient reaches the hospital. 

        </p><br />
  <Row>
    <Col>
    <Card 
            style={{
              backgroundImage: `url(${blue})`,
              backgroundSize : 'cover',
              color: 'black',
              textAlign: 'center',
              padding : '20px',
              margin : '40px'
            }}
      >
        <Card.Body>
          <Card.Title>Ambulance Login</Card.Title>
          <Card.Text>
          <Link to="/ambulance/login" variant="primary">
            Sign In <i className="fas fa-sign-in-alt"></i>
          </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>


    <Col>
    <Card 
      style={{
        backgroundImage: `url(${green})`,
        backgroundSize : 'cover',
        color: 'black',
        textAlign: 'center',
        padding : '20px',
        margin : '40px'
      }}
>
        <Card.Body>
          <Card.Title>Hospital Login</Card.Title>
          <Card.Text>
          <Link to="/hospital/login" variant="primary">
            Sign In <i className="fas fa-sign-in-alt"></i>
          </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>

      
    </Fragment>
  );
};

export default HomePage;
