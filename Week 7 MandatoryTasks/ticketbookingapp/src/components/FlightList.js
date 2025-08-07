
import React from 'react';

const flights = [
  { id: 1, airline: "IndiGo", from: "Delhi", to: "Mumbai", price: 3500 },
  { id: 2, airline: "Air India", from: "Hyderabad", to: "Bangalore", price: 4200 },
  { id: 3, airline: "SpiceJet", from: "Chennai", to: "Kolkata", price: 3900 },
];

const FlightList = () => (
  <div>
    <h2>Available Flights</h2>
    <ul>
      {flights.map((flight) => (
        <li key={flight.id}>
          {flight.airline}: {flight.from}  {flight.to} — ₹{flight.price}
        </li>
      ))}
    </ul>
  </div>
);

export default FlightList;
