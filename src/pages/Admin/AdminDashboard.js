import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import AdminNav from '../../components/AdminNav';

function AdminDashboard(props) {
  return (
    <div>
      <AdminNav {...props}></AdminNav>
      <h1 className="my-4 text-center">Admin Dashboard</h1>
      <br />
      <CardGroup>
        <Card className="justify-content-md-center">
          <Card.Body>
            <Card.Title>Hospital Registration</Card.Title>
            <Card.Text>
              Dear Admin, you can now add all your network hospitals to our
              system and let the words of your Paramedic be heard
              instantaneously
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to="/admin/hospital/create" variant="primary">
              Hospital Registration
            </Link>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Ambulance Registration</Card.Title>
            <Card.Text>
              Dear Admin, you can add all the heros of your paramedic department
              who are busy out there saving lives for faster information
              transfer to your networked hospitals content.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to="/admin/ambulance/create" variant="danger">
              Ambulance Registration
            </Link>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default AdminDashboard;
