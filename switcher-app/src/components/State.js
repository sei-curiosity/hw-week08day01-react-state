import React, { Component } from 'react';

class  State extends Component {
    constructor(props){
        super(props)
          this.state = { 
              toggle: false }
    }  
       toggleButton=()=>{
        const {onOrOff}=this.state
        this.setState({
            onOrOff: !onOrOff
        })
    }
    render() { 
        const {onOrOff} =this.state;
        return ( <React.Fragment>
            <p><b>Switch is { onOrOff }</b></p>
            <button onClick={this.toggleButton}>{ onOrOff }</button>
     </React.Fragment> );
    }
}
 
export default State;