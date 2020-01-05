import React, { Component } from 'react';

class Switcher extends Component {
    state = {   toggle: false, 
                onOrOff: 'on'}

    toggleButton = () => {
        this.setState({ toggle: !(this.state.toggle) })
        this.setState({ onOrOff: this.state.toggle? 'on': 'off' })

    }


    render() { 
        return ( 
            <React.Fragment>
                <p><b>Switch is { this.state.onOrOff }</b></p>
                <button onClick={this.toggleButton}>{ this.state.onOrOff }</button>
            </React.Fragment>
         );
    }
}
 
export default Switcher;