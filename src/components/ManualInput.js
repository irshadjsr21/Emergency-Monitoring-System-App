import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import admin from '../../images/admin.jpeg'

function ManualInput() {

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
        <Card border="info" style={{ backgroundImage: `url(${admin})`, opacity: 0.8, color: 'black', textAlign: 'center', justifyContent: 'center' }}>
            <br />
            <h2>Manual Input</h2>

            <Form noValidate validated={validated} onSubmit={handleSubmit} >

                <Form.Row className="justify-content-md-center">
                    <Form.Group as={Col} md="4" controlId="validationPatientName">
                        <Form.Label>Patient Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                <Form.Row className="justify-content-md-center">
                    <Form.Group as={Col} md="4" controlId="validationContactNumber">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control
                            required
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                <Form.Row className="justify-content-md-center">
                    <Form.Group as={Col} md="4" controlId="validationEmergencyContactNumber">
                        <Form.Label>Emergency Contact Number</Form.Label>
                        <Form.Control
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid Contact Number.
              </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>


                <Form.Row className="justify-content-md-center">
                    <Form.Group as={Col} md="4" controlId="validationMonitorReadings">
                        <Form.Label>Monitor Readings</Form.Label>
                        <Form.Control
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid readings.
              </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                <Form.Row className="justify-content-md-center">
                    <Form.Group as={Col} md="4" controlId="validationNatureOfAccident">
                        <Form.Label>Nature of Accident</Form.Label>
                        <Form.Control
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid details.
              </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                <Form.Row className="justify-content-md-center">
                    <Form.Group as={Col} md="4" controlId="validationSeverityOfCondition">
                        <Form.Label>Severity of Condition</Form.Label>
                        <Form.Control
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid details.
              </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                <Button type="submit">Submit</Button>
                <br />
            </Form>
            <br />
        </Card>

    );
}

export default ManualInput