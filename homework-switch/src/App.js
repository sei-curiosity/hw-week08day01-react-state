import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Switch'
import Switch from './Switch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    
        <Switch/>
      </header>
    </div>
  );
}

export default App;
