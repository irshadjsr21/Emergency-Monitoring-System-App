import React, { useState, useEffect } from "react";
import io from "socket.io-client";


const medical = datas.map(name=>{
  console.log(name)
})

let socket;

const HospitalDashboard = () => {
  /*const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [enumber, setEnumber] = useState('');
  const [readings, setReadings] = useState('');
  const [nature, setNature] = useState('');
  const [condition, setCondition] = useState('');*/
  const [datas,setDatas] = useState([]);

  const ENDPOINT = 'http://localhost:4000';

  useEffect(() => {

    socket = io(ENDPOINT);

  }, [ENDPOINT]);
  
  useEffect(() => {
    socket.on('chat', data => {
      console.log(data)
      setDatas(datas=>[...datas,data])
    });
}, []);


  return (
<div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>name</th>
              <th>number</th>
              <th>enumber</th>
              <th>readings</th>
              <th>nature</th>
              <th>condition</th>
            </tr>
          </thead>
          <tbody>
            {medical(datas)}
          </tbody>
        </table>
      </div>
  );
}

export default HospitalDashboard;