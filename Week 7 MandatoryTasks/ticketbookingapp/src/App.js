
import React, { useState } from 'react';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="App">
      <header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>Ticket Booking App</h1>
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </header>

      <main style={{ marginTop: '20px' }}>
        {isLoggedIn ? <UserPage /> : <GuestPage />}
      </main>
    </div>
  );
}

export default App;

