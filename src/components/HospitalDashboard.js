import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

let socket;

const HospitalDashboard = () => {
  /*const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [enumber, setEnumber] = useState('');
  const [readings, setReadings] = useState('');
  const [nature, setNature] = useState('');
  const [condition, setCondition] = useState('');*/
  const [datas,setDatas] = useState([]);

  const ENDPOINT = 'http://localhost:4000/';

  useEffect(() => {

    socket = io(ENDPOINT);

  }, [ENDPOINT]);

  useEffect(() => {
    socket.on('chat', data => {
      console.log(data)
      setDatas(datas=>[...datas,data])
    });
}, []);

  const Accepted = () => {

  }

  const Declined = () => {
    
  }

  return (
<div className="justify-content-md-center" style={{ color: 'black', textAlign: 'center', justifyContent: 'center' }}>
  <h1 className="justify-content-md-center"> Hospital Dashboard </h1>
{datas.map((item) => (
<Alert variant="danger" className="justify-content-md-center">
  <Alert.Heading className="justify-content-md-center">Incoming Patient Details</Alert.Heading>
   
    <div style={{ color: 'black',fontWeight : 'bold'}}>
  <p>Name : {item.name}</p>
    <p>Contact Number : {item.number}</p>
    <p>Emergency Contact Number : {item.enumber}</p>
    <p>Monitor Reading : {item.readings}</p>
    <p>Nature of Emergency : {item.nature}</p>
    <p>Severity of Emergency : {item.condition}</p>
    </div>
    
  <hr />
  
  <p className="mb-0">
  <Button disabled variant="success" onClick={Accepted}><i class="fa fa-check ">  Accept</i></Button>
  <Button disabled variant="danger" onClick={Declined}><i class="fa fa-times">  Decline</i> </Button>
  </p>  <br /> 
</Alert>
))}
    
</div>
  );
}

export default HospitalDashboard;