import React, {Component} from "react";

class App extends Component {
  
  state = { 
      toggle: false 
    }

  ONHandler = () => {
    this.setState(({...prevState}) => {
      prevState.toggle = !prevState.toggle
      return prevState
    })
  }
  
  
  render () {
  return (
    <div className="App">
      <br/>
      <h1>Switch is {this.state.toggle ? "ON" : "OFF"} </h1>
      <button onClick={this.ONHandler}> {this.state.toggle ? "ON" : "OFF"} </button>
    </div>
  );
}}
export default App