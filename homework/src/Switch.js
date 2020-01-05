import React, { Component } from 'react';

class Switch extends Component {
    constructor (props) {
        // make call to parent class' (Component) constructor
        super(props)
        this.state = {
            toggle: false// initialize this.state.moodPoints to be 1
          }    }
          toggleButton = ()=>{
            const { toggle } = this.state
            this.setState ({
                toggle: !toggle
            })
        }
   
    render(){ 
        let onOrOff 
        let colored 
  
        let { toggle } = this.state

        if(toggle) {
            onOrOff = "On"
            colored= { color: 'green' };
        } else {
            onOrOff = "Off"
            colored={ color: 'red' }
        }
        return ( 
<React.Fragment>
        <h1 style={colored}><b>Switch is { onOrOff }</b></h1>
        <button onClick={this.toggleButton}>{ onOrOff }</button>
 </React.Fragment>
            
         );
    }
}
 
export default Switch;