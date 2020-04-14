import React,{useState} from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function RegisterParamedic() {
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
        <Card fluid bg="light" border="info" style={{color:'black',textAlign:'center', justifyContent: 'center'}}>
            <br />
        <h2>Register Paramedic</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit} >

        <Form.Row className="justify-content-md-center">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Vehicle Number</Form.Label>
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

        <Button type="submit">Register Paramedic</Button>
      </Form>
      <br />
      </Card>
  
         );
}

export default RegisterParamedic
