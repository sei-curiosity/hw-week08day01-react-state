import React, { Component } from 'react';
class Switch extends Component {
    constructor(props){
        super(props)
        this.state ={
            toggle: false
        }
    }
    toggleButton = () => {
        let {toggle} = this.state
       this.setState({
           toggle : !toggle
       })
   }
    render() { 
        let {toggle} = this.state
        let tstyle
        let onOrOff

        if (!toggle){
         onOrOff = "off"
         tstyle = {color: "red"}}
        else if (toggle){
            onOrOff = "on"
            tstyle = {color: "green"}
        }
        return ( 
            <React.Fragment>
            <h2 style={tstyle} >Switch is {onOrOff}</h2>
            <button  onClick={this.toggleButton}>{onOrOff}</button>
            </React.Fragment>
         );
    }
}
 
export default Switch;