import React, { Component } from 'react';
class Switcher extends Component {
    constructor(props){ // why on earth I custumize the constructor while am not sending any props when utalizing the component
        super(props)
        this.state = { 
            toggle: false
        }
}// end construct

    toggleButton = () => {
        let { toggle } = this.state // I dislike how it has to be initialized twice
        this.setState({
            toggle: !toggle
        })
    }    

    render() { 
    let onOrOff
    let color
    let { toggle } = this.state

    if(toggle){
        onOrOff = "On"
        color = "green"
    } else {
        onOrOff = "Off"
        color = "red"
    }
        return ( 
            <React.Fragment>
                <p className={color}><b>Switch is { onOrOff }</b></p>
                <button onClick={this.toggleButton}>{ onOrOff }</button>
            </React.Fragment>
         )
    }
}
 
export default Switcher;