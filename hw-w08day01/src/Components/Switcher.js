import React, { Component } from 'react';


class Switcher extends Component {
   constructor(props){
       super(props)
       this.state = {
        toggle: false
       }
   }
   ToggleButton  = ()=> {
    const {toggle} = this.state
    this.setState({
        toggle: !toggle
    })
    }
    render() { 
        let onOrOff
        let {toggle} = this.state

        if(toggle)
        {
          onOrOff ="ON"
        }
        else
        {
          onOrOff="OFF"
        }
        
        return ( 
        <React.Fragment>

        <p><b>Switch is { onOrOff }</b></p>
        <button onClick={this.ToggleButton}>{ onOrOff }</button>

        </React.Fragment>
         );
    }
}
 
export default Switcher;