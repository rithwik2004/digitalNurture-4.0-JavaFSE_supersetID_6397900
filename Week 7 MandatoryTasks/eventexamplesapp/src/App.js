
import React, { useState } from 'react';
import './App.css';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const sayHello = () => {
    console.log("Hello! This is a static message.");
    alert("Hello! This is a static message.");
  };

  const handleIncrement = () => {
    increment();
    sayHello();
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const sayMessage = (msg) => {
    alert(msg);
  };

  const handleClick = () => {
    alert("I was clicked");
  };

  return (
    <div className="App">
      <h1>Event Examples App</h1>

      <h2>Counter: {count}</h2>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <hr />

      <button onClick={() => sayMessage("Welcome")}>Say Welcome</button>

      <hr />

      <button onClick={handleClick}>OnPress</button>

      <hr />

      <CurrencyConvertor />
    </div>
  );
}

export default App;
