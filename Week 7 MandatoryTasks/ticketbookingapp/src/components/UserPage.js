
import React from 'react';
import FlightList from './FlightList';

const UserPage = () => (
  <div>
    <h1>Welcome, User!</h1>
    <p>You can now book your tickets.</p>
    <FlightList />
    <button style={{ marginTop: '10px' }}>Book Now</button>
  </div>
);

export default UserPage;
