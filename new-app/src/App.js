import React, {Component} from 'react';

class App extends Component {
  state = {
    toggle: false
  }
  onHandler = () => {
    this.setState(({...copyState})=>{
      copyState.toggle =! copyState.toggle
      return copyState
    })
  }
  render () {
    return (
      <div className="App">
        <h2>switch is {this.state.toggle ? "ON" : "OFF"}</h2>
        <button onClick= {this.onHandler}> {this.state.toggle ? "ON" : "OFF"} </button>
      </div>
    )
  }
}
export default App;