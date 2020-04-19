import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import AdminNav from '../../components/AdminNav';
import mixed from '../../images/mixed.jpg';

function AdminDashboard(props) {
  return (
    <div>
      <AdminNav {...props}></AdminNav>
      <h1 className="my-4 text-center">Admin Dashboard</h1>
      <br />
      
        <Card 
          style={{
            backgroundImage: `url(${mixed})`,
            backgroundSize : 'cover',
            color: 'black',
            textAlign: 'center',
            padding : '20px',
            margin : '40px'
          }}
        >
          <Card.Body>
            <Card.Title>Hospital Registration</Card.Title>
            <Card.Text>
              Dear Admin, you can now add all your network hospitals to our
              system and let the words of your Paramedic be heard
              instantaneously
              <br /> <br />
              <Link style={{fontWeight : 'bold'}} to="/admin/hospital/create" variant="primary">
              <i class="fas fa-user-plus"></i> Hospital Registration</Link>
            </Card.Text>
          </Card.Body>

        </Card>

<br />

        <Card style={{
            backgroundImage: `url(${mixed})`,
            backgroundSize : 'cover',
            color: 'black',
            textAlign: 'center',
            padding : '20px',
            margin : '40px'
          }}>
          <Card.Body>
            <Card.Title>Ambulance Registration</Card.Title>
            <Card.Text>
              Dear Admin, you can add all the heros of your paramedic department
              who are busy out there saving lives for faster information
              transfer to your networked hospitals content.
              <br /><br />
              <Link style={{fontWeight : 'bold'}} to="/admin/ambulance/create" variant="danger">
              <i class="fas fa-user-plus"></i> Ambulance Registration</Link>
            </Card.Text>
          </Card.Body>
        </Card>
      
    </div>
  );
}

export default AdminDashboard;
