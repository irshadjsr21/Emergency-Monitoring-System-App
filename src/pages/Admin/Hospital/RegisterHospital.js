import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { createHospital } from '../../../services/admin';
import AdminNav from '../../../components/AdminNav';
import blue from '../../../images/blue.jpg';

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
          <h2 style={{color : '#0044cc'}}>Add Hospital</h2>
          <br />
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
              <i class="fas fa-map-marked-alt fa-2x" style={{color : '#0044cc'}}></i>
                <Form.Control
                  required
                  type="text"
                  placeholder = "Please enter the branch name"
                  value={this.state.branchName}
                  onChange={this.onChangeName}
                  isInvalid={this.state.errors.branchName}
                  style = {{border: 'none',
                background: 'transparent',
                  borderBottom: '1px solid #000000',
                  boxShadow: 'none',
                  borderRadius: '0',
                   }}
                />
                <Form.Control.Feedback type="invalid">
                  {this.state.errors.branchName}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
                  <br />
                  <br />
            <Form.Row className="justify-content-md-center">
              <Form.Group as={Col} md="4" controlId="validationAdminEmail">
              <i class="fas fa-envelope-open fa-2x" style={{color : '#0044cc'}}></i>
                <Form.Control
                  type="email"
                  required
                  placeholder = "Please entered the branch email address"
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
            <Button type="submit">Register Hospital</Button>
            <br />
          </Form>
          <br />
        </Card>
      </div>
    );
  }
}
