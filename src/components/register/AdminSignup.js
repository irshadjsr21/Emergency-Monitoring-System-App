import React, {useState} from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import admin from '../../images/admin.jpeg'

function AdminSignup() {

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
        <Card  border="info" style={{backgroundImage:`url(${admin})`,opacity: 0.8,color:'black',textAlign:'center', justifyContent: 'center'}}>
        <br />
        <h2>Admin SignUp</h2>

        <Form noValidate validated={validated} onSubmit={handleSubmit} >
        
        <Form.Row className="justify-content-md-center">
          <Form.Group as={Col} md="4" controlId="validationAdminName">
            <Form.Label>Hospital Name</Form.Label>
            <Form.Control
              required
              type="text"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row className="justify-content-md-center">
          <Form.Group as={Col} md="4" controlId="validationAdminReg">
            <Form.Label>Hospital Registration Number</Form.Label>
            <Form.Control
              required
              type="text"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row className="justify-content-md-center">
          <Form.Group as={Col} md="4" controlId="validationAdminEmail">
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
          <Form.Group as={Col} md="4" controlId="validationAdminPassword">
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

        
        <Form.Group>
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Button type="submit">Admin SignUp</Button>
        <br />
      </Form>
      <br />
      </Card>
  
         );
    }
          
export default AdminSignup

