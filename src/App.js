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
        <Route exact path = "/adminregister" component={AdminSignup} />
        <Route exact path = "/hospitalregister" component={RegisterHospital} />
        <Route exact path = "/paramedicregister" component={RegisterParamedic} />
        <Route exact path = "/adminlogin" component={AdminLogin} />
        <Route exact path = "/admindashboard" component={AdminDashboard} />
        <Route exact path = "/hospitallogin" component={LoginHospital} />
        <Route exact path = "/paramediclogin" component={LoginParamedic} />

      </Switch>
    </Router>
  );
}

export default App;
