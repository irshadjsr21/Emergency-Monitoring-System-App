import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

let socket;

const HospitalDashboard = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [enumber, setEnumber] = useState('');
  const [readings, setReadings] = useState('');
  const [nature, setNature] = useState('');
  const [condition, setCondition] = useState('');

  const ENDPOINT = 'http://localhost:4000';

  useEffect(() => {

    socket = io(ENDPOINT);

  }, [ENDPOINT]);
  
  useEffect(() => {
    socket.on('chat', data => {
      setName(data.name);
      setNumber(data.number);
      setEnumber(data.enumber);
      setReadings(data.readings);
      setNature(data.nature);
      setCondition(data.condition);
    });
}, []);

  const Accepted = () => {

  }

  const Declined = () => {
    
  }

  return (
<div>
<Alert variant="danger">
  <Alert.Heading>Incoming Patient Details</Alert.Heading>
  
  <p>Name : {name}</p>
    <p>Contact Number : {number}</p>
    <p>Emergency Contact Number : {enumber}</p>
    <p>Monitor Reading : {readings}</p>
    <p>Nature of Emergency : {nature}</p>
    <p>Severity of Emergency : {condition}</p>
  
  <hr />
  <p className="mb-0">
  <Button disabled variant="success" onClick={Accepted}><i class="fa fa-check ">  Accept</i></Button>
  <Button disabled variant="danger" onClick={Declined}><i class="fa fa-times">  Decline</i> </Button>
  </p>
</Alert>
    
</div>
  );
}

export default HospitalDashboard;