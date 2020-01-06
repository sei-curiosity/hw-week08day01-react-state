import React,{Component} from 'react';

import './App.css';
import { render } from '@testing-library/react';

class App extends Component  {
  constructor(props){
    super(props)
    this.state = { toggle: false }
  }

  toggleButton= (e)=>{
    this.setState(({...prevState})=>{
      prevState.toggle=!prevState.toggle
      return prevState
    })

  }
  render(){
    const onOrOff =(this.state.toggle)? 'On':'Off'
  return (
  <React.Fragment>
    <p><b>Switch is { onOrOff }</b></p>
    <button onClick={this.toggleButton}>{ onOrOff }</button>
</React.Fragment>
  )
}
}

export default App;
