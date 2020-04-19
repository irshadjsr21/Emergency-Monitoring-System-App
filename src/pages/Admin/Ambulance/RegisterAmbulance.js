import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { createAmbulance } from '../../../services/admin';
import AdminNav from '../../../components/AdminNav';
import blue from '../../../images/red.jpg';

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
        <Card
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
          <h2 style={{color : '#b30000'}}>Add Ambulance</h2>

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
          <br />
          <Form onSubmit={this.onSubmit}>
            <Form.Row className="justify-content-md-center">
              <Form.Group as={Col} md="4" controlId="validationAdminName">
              <i class="fas fa-ambulance fa-2x" style={{color:'#b30000'}}></i>
                <Form.Control
                  required
                  placeholder="Please enter the Vechile No."
                  type="text"
                  value={this.state.vehicleNo}
                  onChange={this.onChangeName}
                  isInvalid={this.state.errors.vehicleNo}
                  style = {{border: 'none',
                background: 'transparent',
                  borderBottom: '1px solid #000000',
                  boxShadow: 'none',
                  borderRadius: '0',
                   }}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.vehicleNo}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <br />
            <Form.Row className="justify-content-md-center">
              <Form.Group as={Col} md="4" controlId="validationAdminEmail">
              <i class="fas fa-envelope-open fa-2x" style={{color : '#b30000'}}></i>
                <Form.Control
                placeholder="Please enter your email address"
                  type="email"
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
            <Button variant="danger" type="submit">Register Ambulance</Button>
            <br />
          </Form>
          <br />
        </Card>
      </div>
    );
  }
}
