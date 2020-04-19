import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import green from '../../images/green.jpg';
import { ambulanceLogin } from '../../services/ambulance';

class LoginAmbulance extends Component {
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

    ambulanceLogin(form)
      .then((token) => {
        this.props.history.push('/ambulance/quickaction');
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
          backgroundImage: `url(${green})`,
          backgroundSize : 'cover',
          color: 'black',
          textAlign: 'center',
          padding : '20px',
          margin : '40px'
        }}
      >
        <br />
        <h2 style={{color:'#004d1a'}}>Ambulance Login</h2>
        <br />
        <Form onSubmit={this.onSubmit}>
          <Form.Row className="justify-content-md-center">
            <Form.Group as={Col} md="4" controlId="validationambulanceEmail">
            <i class="fas fa-envelope-open fa-2x" style={{color : '#004d1a'}}></i>
              <Form.Control
                type="email"
                placeholder="Enter your Email"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                isInvalid={this.state.errors.email}
                style = {{border: 'none',
                background: 'transparent',
                  borderBottom: '1px solid #000000',
                  boxShadow: 'none',
                  borderRadius: '0',
                   }}
              />
              <Form.Control.Feedback type="invalid">
                {this.state.errors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row className="justify-content-md-center">
            <Form.Group as={Col} md="4" controlId="validationambulancePassword">
            <i class="fas fa-key fa-2x" style={{color : '#004d1a'}}></i>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                required
                value={this.state.password}
                onChange={this.onChangePassword}
                isInvalid={this.state.errors.password}
                style = {{border: 'none',
                background: 'transparent',
                  borderBottom: '1px solid #000000',
                  boxShadow: 'none',
                  borderRadius: '0',
                   }}
              />
              <Form.Control.Feedback type="invalid">
                {this.state.errors.password}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Button variant="success" type="submit">Login</Button>
          <br />
          <br />
          <Button className="pull-right" variant="dark pull-right" href="/" type="button"><i class="fas fa-arrow-left"></i> Back To Main Menu</Button>
        </Form>
        <br />
      </Card>
    );
  }
}

export default LoginAmbulance;
