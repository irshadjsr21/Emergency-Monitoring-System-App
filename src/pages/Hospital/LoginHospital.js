import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import hospital from '../../images/hospital.jpg';
import { hospitalLogin } from '../../services/hospital';

class LoginHospital extends Component {
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

    hospitalLogin(form)
      .then((token) => {
        this.props.history.push('/hospital/dashboard');
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
          backgroundImage: `url(${hospital})`,
          opacity: 0.8,
          color: 'black',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        <br />
        <h2>Hospital Login</h2>

        <Form onSubmit={this.onSubmit}>
          <Form.Row className="justify-content-md-center">
            <Form.Group as={Col} md="4" controlId="validationhospitalEmail">
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
            <Form.Group as={Col} md="4" controlId="validationhospitalPassword">
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

          <Form.Group>
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
            />
          </Form.Group>
          <Button type="submit">Login</Button>
          <br />
        </Form>
        <br />
      </Card>
    );
  }
}

export default LoginHospital;
