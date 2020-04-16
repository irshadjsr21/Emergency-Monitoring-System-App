import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { createHospital } from '../../../services/admin';
import AdminNav from '../../../components/AdminNav';

export default class RegiesterHospital extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      branchName: '',
      email: '',
      errors: {
        branchName: null,
        email: null,
      },
      createdPassword: '',
      isCreated: false,
      createdEmail: '',
    };
  }

  onChangeName(e) {
    this.setState({
      branchName: e.target.value,
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
      branchName: this.state.branchName,
      email: this.state.email,
    };

    createHospital(form)
      .then((res) => {
        if (res && res.data && res.data.hospital) {
          this.setState({
            isCreated: true,
            createdPassword: res.data.hospital.password,
            createdEmail: res.data.hospital.email,
            errors: {},
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
      <div>
        <AdminNav {...this.props}></AdminNav>
        <Container
          style={{
            opacity: 0.8,
            color: 'black',
            textAlign: 'center',
            justifyContent: 'center',
          }}
        >
          <br />
          <h2>Add Hospital</h2>

          {this.state.isCreated && (
            <Alert
              variant="success"
              onClose={() => this.setState({ isCreated: false })}
              dismissible
            >
              <div>Hospital is created with the following credentials</div>
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
                <Form.Label>Branch Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  value={this.state.branchName}
                  onChange={this.onChangeName}
                  isInvalid={this.state.errors.branchName}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.branchName}
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
            <Button type="submit">Register Hospital</Button>
            <br />
          </Form>
          <br />
        </Container>
      </div>
    );
  }
}
