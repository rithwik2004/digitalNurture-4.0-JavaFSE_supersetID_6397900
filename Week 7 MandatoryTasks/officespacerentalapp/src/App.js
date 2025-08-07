import React from 'react';
import './App.css';

function App() {
  const office = {
    name: 'Tech Park Hub',
    rent: 75000,
    address: '123 Silicon Street, Bangalore',
    image: 'https://via.placeholder.com/400x200?text=Office+Space',
  };

  
  const offices = [
    {
      name: 'Startup Space',
      rent: 55000,
      address: '11 MG Road, Mumbai',
    },
    {
      name: 'CoWork Plaza',
      rent: 62000,
      address: '99 Ring Road, Delhi',
    },
    {
      name: 'Skyline Office',
      rent: 48000,
      address: 'Block B, Hyderabad',
    },
  ];

  
  const getRentStyle = (rent) => ({
    color: rent < 60000 ? 'red' : 'green',
    fontWeight: 'bold',
  });

  return (
    <div className="App">
      
      <h1>Office Space Rental App</h1>

      
      <img src={office.jpg} alt="Office Space" style={{ width: '400px', height: '200px' }} />

      
      <div style={{ marginTop: '20px' }}>
        <h2>{office.name}</h2>
        <p style={getRentStyle(office.rent)}>Rent: ₹{office.rent}</p>
        <p>Address: {office.address}</p>
      </div>

      
      <h2>Available Spaces:</h2>
      {offices.map((space, index) => (
        <div key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{space.name}</h3>
          <p style={getRentStyle(space.rent)}>Rent: ₹{space.rent}</p>
          <p>Address: {space.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

