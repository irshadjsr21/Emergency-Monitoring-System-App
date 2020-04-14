import React, {useState} from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import admin from '../../images/admin.jpeg'

function RegisterHospital() {
    const [validated, setValidated] = useState(false);
    
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }    
        setValidated(true);
    };

    return (
        <Card fluid bg="light" border="success" style={{backgroundImage:`url(${admin})`,opacity: 0.8,color:'red',textAlign:'center', justifyContent: 'center'}}>
        <br />
        <h2>Hospital Registration</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit} >

        <Form.Row className="justify-content-md-center">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Branch Name</Form.Label>
            <Form.Control
              required
              type="text"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row className="justify-content-md-center">
          <Form.Group as={Col} md="4" controlId="validationCustomEmail">
            <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>  
          </Form.Group>
        </Form.Row>
        
        
        <Form.Row className="justify-content-md-center">
          <Form.Group as={Col} md="4" controlId="validationCustomPassword">
            <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid password.
              </Form.Control.Feedback>  
          </Form.Group>
        </Form.Row>


          <Form.Row className="justify-content-md-center">
          <Form.Group as={Col} md="4" controlId="validationCustom05">
            <Form.Label>Branch Location</Form.Label>
            <Form.Control type="text" required />
            <Form.Control.Feedback type="invalid">
              Please provide a location.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        
        <Button type="submit">Register Branch</Button>
      </Form>
      <br />
      </Card>
  
         );

}

export default RegisterHospital
