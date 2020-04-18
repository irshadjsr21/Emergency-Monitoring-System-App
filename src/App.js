import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminSignup from './pages/Admin/AdminSignup';
import RegisterHospital from './pages/Admin/Hospital/RegisterHospital';
import RegisterAmbulance from './pages/Admin/Ambulance/RegisterAmbulance';
import HomePage from './pages/HomePage';
import AdminLogin from './pages/Admin/AdminLogin';
import LoginAmbulance from './pages/Ambulance/LoginAmbulance';
import LoginHospital from './pages/Hospital/LoginHospital';
import { AdminGuard } from './components/Guards/AdminGuard';
import QuickActions from './components/QuickActions';
import ManualInput from './components/ManualInput'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/admin/register" component={AdminSignup} />
        <Route exact path="/admin/login" component={AdminLogin} />
        <AdminGuard exact path="/admin/dashboard" component={AdminDashboard} />
        <AdminGuard
          exact
          path="/admin/hospital/create"
          component={RegisterHospital}
        />
        <AdminGuard
          exact
          path="/admin/ambulance/create"
          component={RegisterAmbulance}
        />
        <Route exact path="/hospital/login" component={LoginHospital} />
        <Route exact path="/ambulance/login" component={LoginAmbulance} />
        <Route exact path="/ambulance/quickaction" component={QuickActions} />
        <Route exact path="/ambulance/quickaction/manualinput" component={ManualInput} />
        <Redirect to="/"></Redirect>
      </Switch>
      
    </Router>
  );
}

export default App;
