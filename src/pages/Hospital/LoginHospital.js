import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import blue from '../../images/blue.jpg';
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
          backgroundImage: `url(${blue})`,
          backgroundSize : 'cover',
          color: 'black',
          textAlign: 'center',
          padding : '20px',
          margin : '40px'
        }}
      >
        <br />
        <h2 style={{color : '#0044cc'}}> Hospital Login</h2>
        <br />
        <Form onSubmit={this.onSubmit}>
          <Form.Row className="justify-content-md-center">
            <Form.Group as={Col} md="4" controlId="validationhospitalEmail">
            <i class="fas fa-envelope-open fa-2x" style={{color : '#0044cc'}}></i>
              <Form.Control
                type="email"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                isInvalid={this.state.errors.email}
                placeholder= "Enter your Email"
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
            <Form.Group as={Col} md="4" controlId="validationhospitalPassword">
              <div className="col">
              <i class="fas fa-key fa-2x" style={{color : '#0044cc'}}></i>
              <Form.Control
                type="password"
                required
                value={this.state.password}
                onChange={this.onChangePassword}
                isInvalid={this.state.errors.password}
                placeholder= "Enter your Password"
                style = {{border: 'none',
                  background: 'transparent',
                  borderBottom: '1px solid #000000',
                  boxShadow: 'none',
                  borderRadius: '0' }}
              /> 
              </div>
              <Form.Control.Feedback type="invalid">
                {this.state.errors.password}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          
          <Button type="submit">Login</Button>
          <br />
          <br />
          <Button className="pull-right" variant="dark pull-right" href="/" type="button"><i class="fas fa-arrow-left"></i> Back To Main Menu</Button>
        
        </Form>
        <br />
      </Card>
    );
  }
}

export default LoginHospital;
