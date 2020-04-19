import React, { useState, useEffect } from "react";
import io from "socket.io-client";



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


  return (
<div>
    <p>{name}</p>
    <p>{number}</p>
    <p>{enumber}</p>
    <p>{readings}</p>
    <p>{nature}</p>
    <p>{condition}</p>
</div>
  );
}

export default HospitalDashboard;