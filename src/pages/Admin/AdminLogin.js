import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import admin from '../../images/admin.jpeg';
import { adminLogin } from '../../services/admin';

class AdminLogin extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      password: '',
      email: '',
      errors: {
        password: null,
        email: null,
      },
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const form = {
      email: this.state.email,
      password: this.state.password,
    };

    adminLogin(form)
      .then((token) => {
        this.props.history.push('/admin/dashboard');
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
        border="info"
        style={{
          backgroundImage: `url(${admin})`,
          opacity: 0.8,
          color: 'black',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        <br />
        <h2>Admin Login</h2>

        <Form onSubmit={this.onSubmit}>
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

          <Form.Row className="justify-content-md-center">
            <Form.Group as={Col} md="4" controlId="validationAdminPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                value={this.state.password}
                onChange={this.onChangePassword}
                isInvalid={this.state.errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {this.state.errors.password}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Button type="submit">Login Admin</Button>
          <br />
        </Form>
        <br />
      </Card>
    );
  }
}

export default AdminLogin;
