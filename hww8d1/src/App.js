import React from 'react';
import logo from './logo.svg';
import './App.css';
import Switch from './Componants/Switch'
import ToggleButton from './Componants/ToggleButton'

function App() {
  return (
    <div className="App">
       <ToggleButton  title="" >
           < Switch />
     </ToggleButton>
     
    </div>
  );
}

export default App;
