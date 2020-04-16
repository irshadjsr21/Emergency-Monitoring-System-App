import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
const HomePage = () => {
    return (
        <Fragment>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">Emergency Monitoring System</Navbar.Brand>
  <Nav className="mr-auto">
    </Nav>
    <Nav>
      <Nav.Link href="/admin/login">Admin Login</Nav.Link>
      <Nav.Link href="/admin/register">Admin SignUp</Nav.Link>
    </Nav>
</Navbar>
            <Card className="text-center mx-auto" > 
  
  <Card.Body>
    <Card.Title>Ambulance Login</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
  </Card.Body>
  <Card.Footer className="text-muted"><Link to ="/ambulance/login"  variant="primary">Sign In</Link></Card.Footer>
</Card>
<br />
<br />
<Card className="text-center mx-auto" >
  
  <Card.Body>
    <Card.Title>Hospital Login</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    
  </Card.Body>
  <Card.Footer className="text-muted"><Link to ="/hospital/login" variant="primary">Login In</Link></Card.Footer>
</Card>
        </Fragment>
    )
}

export default HomePage
