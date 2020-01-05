import React, { Component } from 'react';

class Switcher extends Component {
    constructor(props){
    super(props)
    this.state = { toggle: false }

    }
    
    
    toggleButton = ()=>{
        const { toggle } = this.state
        this.setState ({
            toggle: !toggle
        })
    }


    render() { 
        let {onOrOff} = this.props
        const { toggle } = this.state

        if(toggle) {
            onOrOff = "On"
        } else {
            onOrOff = "off"
        }
        

        
        return ( 
            <div>
                <React.Fragment>
        <p><b>Switch is {onOrOff}</b></p>
        <button onClick={this.toggleButton}>{ onOrOff }</button>
    </React.Fragment>
            </div>
         );
    }
}
 
export default Switcher;