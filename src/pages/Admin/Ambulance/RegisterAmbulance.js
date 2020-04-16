import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { createAmbulance } from '../../../services/admin';

export default class RegiesterAmbulance extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      vehicleNo: '',
      email: '',
      errors: {
        vehicleNo: null,
        email: null,
      },
      createdPassword: '',
      isCreated: false,
      createdEmail: '',
    };
  }

  onChangeName(e) {
    this.setState({
      vehicleNo: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const form = {
      vehicleNo: this.state.vehicleNo,
      email: this.state.email,
    };

    createAmbulance(form)
      .then((res) => {
        if (res && res.data && res.data.ambulance) {
          this.setState({
            isCreated: true,
            createdPassword: res.data.ambulance.password,
            createdEmail: res.data.ambulance.email,
            errors: {}
          });
        }
      })
      .catch((error) => {
        if (error.data) {
          this.setState({
            errors: error.data,
          });
        }
      });
  }

  render() {
    return (
      <Card
        style={{
          opacity: 0.8,
          color: 'black',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        <br />
        <h2>Add Ambulance</h2>

        {this.state.isCreated && (
          <Alert
            variant="success"
            onClose={() => this.setState({ isCreated: false })}
            dismissible
          >
            <div>Ambulance is created with the following credentials</div>
            <div>Email : {this.state.createdEmail}</div>
            <div>Password : {this.state.createdPassword}</div>
            <div>
              Please note down this password, it won't be displayed again
            </div>
          </Alert>
        )}

        <Form onSubmit={this.onSubmit}>
          <Form.Row className="justify-content-md-center">
            <Form.Group as={Col} md="4" controlId="validationAdminName">
              <Form.Label>Vehicle No.</Form.Label>
              <Form.Control
                required
                type="text"
                value={this.state.vehicleNo}
                onChange={this.onChangeName}
                isInvalid={this.state.errors.vehicleNo}
              />
              <Form.Control.Feedback type="invalid">
                {this.state.errors.vehicleNo}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row className="justify-content-md-center">
            <Form.Group as={Col} md="4" controlId="validationAdminEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                isInvalid={this.state.errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {this.state.errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Button type="submit">Register Ambulance</Button>
          <br />
        </Form>
        <br />
      </Card>
    );
  }
}
