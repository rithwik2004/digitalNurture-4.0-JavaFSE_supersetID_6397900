
import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState(null);

  const handleSubmit = () => {
    const value = parseFloat(rupees);
    if (!isNaN(value)) {
      const converted = value / 90; 
      setEuros(converted.toFixed(2));
    }
  };

  return (
    <div>
      <h2>Currency Convertor</h2>
      <input
        type="number"
        placeholder="Enter amount in INR"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      />
      <button onClick={handleSubmit}>Convert</button>

      {euros && (
        <p>
          ₹{rupees} = €{euros}
        </p>
      )}
    </div>
  );
}

export default CurrencyConvertor;
