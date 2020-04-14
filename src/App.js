import React from 'react';
import './App.css';
import AdminSignup from './components/register/AdminSignup';
import RegisterHospital from './components/register/RegisterHospital';
import RegisterParamedic from './components/register/RegisterParamedic';

function App() {
  return (
      <div>
      <AdminSignup />
      <br />
      <RegisterHospital />
      <br />
      <RegisterParamedic />
      </div>
      );
}

export default App;
