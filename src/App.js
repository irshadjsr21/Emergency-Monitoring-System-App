import React from 'react';
import './App.css';
import AdminSignup from './components/register/AdminSignup';
import RegisterHospital from './components/register/RegisterHospital';
import RegisterParamedic from './components/register/RegisterParamedic';
import AdminLogin from './components/Login/AdminLogin';
import LoginParamedic from './components/Login/LoginParamedic';
import LoginHospital from './components/Login/LoginHospital';

function App() {
  return (
    <div>
      <AdminSignup />
      <br />
      <RegisterHospital />
      <br />
      <RegisterParamedic />
      <br />
      <AdminLogin />
      <br />
      <LoginParamedic />
      <br />
      <LoginHospital />
    </div>
  );
}

export default App;
