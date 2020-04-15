import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ambulance from '../../images/screen1.jpg'


function LoginParamedic() {
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
        <Card fluid bg="light" border="info" style={{ backgroundImage: `url(${ambulance})`, opacity: 0.5, color: 'white', textAlign: 'center', justifyContent: 'center' }}>
            <br />
            <h2>Paramedic Login</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit} >


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

                <Button type="submit">Login Paramedic</Button>
            </Form>
            <br />
        </Card>

    );
}

export default LoginParamedic