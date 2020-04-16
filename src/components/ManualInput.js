import React, {useState,Component} from 'react'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import admin from '../../images/admin.jpeg'

export default class ManualInput extends Component{

  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onChangeEnumber = this.onChangeEnumber.bind(this);
    this.onChangeReadings = this.onChangeReadings.bind(this);
    this.onChangeNature = this.onChangeNature.bind(this);
    this.onChangeCondition = this.onChangeCondition.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        name:"",
        number:"",
        enumber:"",
        readings:"",
        nature:"",
        condition:""
    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeNumber(e) {
    this.setState({
      number: e.target.value
    })
  }

  onChangeEnumber(e) {
    this.setState({
      enumber: e.target.value
    })
  }

  onChangeReadings(e) {
    this.setState({
      readings: e.target.value
    })
  }

  onChangeNature(e) {
    this.setState({
      nature: e.target.value
    })
  }

  onChangeCondition(e) {
    this.setState({
      condition: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const form = {
        name:this.state.name,
        number:this.state.number,
        enumber:this.state.enumber,
        readings:this.state.readings,
        nature:this.state.nature,
        condition:this.state.condition
    }

    console.log(form);

 
  }

  render(){
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
                        value={this.state.name}
                        onChange={this.onChangeName}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Form.Row>

            <Form.Row className="justify-content-md-center">
                <Form.Group as={Col} md="4" controlId="validationContactNumber">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control
                        required
                        value={this.state.number}
              onChange={this.onChangeNumber}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Form.Row>

            <Form.Row className="justify-content-md-center">
                <Form.Group as={Col} md="4" controlId="validationEmergencyContactNumber">
                    <Form.Label>Emergency Contact Number</Form.Label>
                    <Form.Control
                        required
                        value={this.state.enumber}
              onChange={this.onChangeEnumber}
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
                        value={this.state.readings}
              onChange={this.onChangeReadings}
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
                        value={this.state.accnature}
              onChange={this.onChangeAccNature}
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
                        value={this.state.condition}
              onChange={this.onChangeCondition}
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
}

