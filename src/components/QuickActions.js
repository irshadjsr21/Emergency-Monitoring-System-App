import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import red from '../images/redgreen.jpg'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import Card from 'react-bootstrap/Card';
export default class QuickActions extends Component {
  render() {
    return (
      <div style={{
        backgroundImage: `url(${red})`,
        backgroundSize : 'cover',
        height : '100vh'
      }}>
      <Container fluid="md">
        <p className="justify-content-md-center" style={{fontSize : "30px", textAlign : 'justify'}}>
        <h2 style={{textAlign:'center'}}><i class="fas fa-laptop-medical" ></i> Emergency Monitoring System</h2>
        </p><br />
  <Row>
    <Col>
    <Card 
    bg='danger'
    text='white'
            style={{
              backgroundSize : 'cover',
              color: 'black',
              textAlign: 'center',
              padding : '20px',
              margin : '40px'
            }}
      >
        <Card.Body>
        <Card.Title style={{align:'center',textAlign:'center'}} className="justify-content-md-center"> <i class="fa fa-video-camera fa-4x" ></i> </Card.Title>
        <Card.Text style={{align:'center',textAlign:'center',color:'white'}}>
        <Link style={{color:'white',fontWeight : 'bold'}} to={'/video'}>Emergency Video Sharing</Link>
        </Card.Text>
      </Card.Body>
      </Card>
    </Col>


    <Col>
    <Card 
    bg='success'
    text='white'
      style={{
        backgroundSize : 'cover',
        color: 'black',
        textAlign: 'center',
        padding : '20px',
        margin : '40px'
      }}
>
<Card.Body>
        <Card.Title style={{align:'center',textAlign:'center'}} className="justify-content-md-center"> <i class="fas fa-edit fa-4x"></i></Card.Title>
        <Card.Text style={{align:'center',textAlign:'center',color:'white'}}>
        <Link style={{color:'white',fontWeight : 'bold'}} to={'/ambulance/quickaction/manualinput'}>Start Manual Input</Link>
        </Card.Text>
      </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>
      </div>
    );
  }
}
