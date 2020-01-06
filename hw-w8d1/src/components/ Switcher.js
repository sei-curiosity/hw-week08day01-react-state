import React, {Component } from 'react';

class  Switcher  extends Component {
    constructor(props){
        super(props)
        this.state={
            toggle: false   
        }
    }
    toggleButton =()=>{
        const {toggle}=this.state
        this.setState ({
            toggle: !toggle  
        })
    }
    render() { 
        let {onOrOff} =this.props
        const {toggle}=this.state
        if(toggle){
            onOrOff="OFF"
        }else{
            onOrOff="ON" 
        }
        return ( 
            <React.Fragment>
                
                <p className={onOrOff}><b>Switch is { onOrOff }</b></p>
                <button className={onOrOff} onClick={this.toggleButton}>
                    { onOrOff }
                    </button>

            </React.Fragment>
         );
    }
}
 
export default  Switcher ;