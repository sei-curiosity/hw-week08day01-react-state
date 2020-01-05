import React from 'react'
import './Switch.css'
class Switch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            toggle: false
         }
    }
    toggleButton=()=>{
        const {toggle} = this.state
        this.setState({
            toggle: !toggle
        })
    }
    
    render(){
        let onOrOff = ""
        const {toggle} = this.state
        if(toggle){
            onOrOff = "ON"
        }
        else{
            onOrOff = "OFF"
        }
        return(
            <React.Fragment>
            
                <p className={onOrOff}><b>Switch is { onOrOff }</b></p>
                <button onClick={this.toggleButton} >{onOrOff}</button>
                    {toggle}           
            </React.Fragment>
        )
    }
}
export default Switch;