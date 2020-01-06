import React,{Component} from 'react'

class Switch extends Component {
    constructor(props) {
    super(props);
    this.state = {
    toggle: false,
    }
    }
    toggleButton=()=>{
    const {toggle} = this.state
    this.setState({toggle: !toggle})
    }
    render() {
    let onOrOff="off"
    let s = "on"
    if(this.state.toggle){
    onOrOff="on"
    s = "off"
    } else {
    onOrOff="off"
    s = "on"

    

    }
    return (
    <React.Fragment>
    <p><b>Switch is { onOrOff }</b></p>
    <button onClick={this.toggleButton}>{ s }</button>
    </React.Fragment>
    );
    }
    }
    
    export default Switch; 