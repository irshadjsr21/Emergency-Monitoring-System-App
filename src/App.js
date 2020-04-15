import React from 'react';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import './App.css';
import AdminDashboard from './components/AdminDashboard';
import AdminSignup from './components/register/AdminSignup';
import RegisterHospital from './components/register/RegisterHospital';
import RegisterParamedic from './components/register/RegisterParamedic';
import HomePage from './components/HomePage'
import AdminLogin from './components/Login/AdminLogin';
import LoginParamedic from './components/Login/LoginParamedic';
import LoginHospital from './components/Login/LoginHospital';

function App() {
  return (
    <Router>
    
      
      <Switch>
        <Route exact path = "/" component={HomePage} />
        <Route exact path = "/admin/register" component={AdminSignup} />
        <Route exact path = "/admin/login" component={AdminLogin} />
        <Route exact path = "/admin/dashboard" component={AdminDashboard} />
        <Route exact path = "/hospital/register" component={RegisterHospital} />
        <Route exact path = "/hospital/login" component={LoginHospital} />
        <Route exact path = "/paramedic/register" component={RegisterParamedic} />
        <Route exact path = "/paramedic/login" component={LoginParamedic} />

      </Switch>
    </Router>
  );
}

export default App;
