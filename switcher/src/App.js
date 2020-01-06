import './App.css';

import React from 'react';

// import logo from './logo.svg';


class App extends React.Component {

  state = { toggle: false } //to toggle the swich based on the click,,

  
  toggle=()=> { 
    let copyState = {...this.state}
    copyState.toggle = !copyState.toggle
    this.setState(copyState)
  }



  render() { 

    return ( 
      <div className="App">
        <h1>
        <button onClick={this.toggle}>Test {this.state.toggle?"On" :"OFF"} </button>
        </h1>
    </div>
     );
  }
}

export default App;
