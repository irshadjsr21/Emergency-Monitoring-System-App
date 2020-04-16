import React, {useState,Component} from 'react'
import axios from 'axios';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import admin from '../../images/admin.jpeg'

export default class AdminLogin extends Component{

  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      password: '',
      email: ''
    }
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const form = {
      email: this.state.email,
      password: this.state.password,
    }

    console.log(form);

    axios.post('http://localhost:5000/admin/login', form)
      .then(res => console.log(res.data));

 
  }

  render(){
    return (
      <Card  border="info" style={{backgroundImage:`url(${admin})`,opacity: 0.8,color:'black',textAlign:'center', justifyContent: 'center'}}>
      <br />
      <h2>Admin SignUp</h2>

      <Form onSubmit={this.onSubmit} >

      <Form.Row className="justify-content-md-center">
        <Form.Group as={Col} md="4" controlId="validationAdminEmail">
          <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              required
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
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
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>  
        </Form.Group>
      </Form.Row>

      <Button type="submit">Admin SignUp</Button>
      <br />
    </Form>
    <br />
    </Card>

       );
  }
}



