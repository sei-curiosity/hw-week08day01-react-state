import React, { Component, Children } from 'react';

class Switcher extends Component {
    constructor(props){
        super(props)
        this.state={
            toggle: false
        }
    }
    toggleMe = ()=> {
        const {toggle} =this.state
        this.setState({
            toggle: !toggle
        })
    }
    render() { 
        let { title ,children } =this.props
        const {toggle}=this.state
       if (toggle){
           title ="on"
       }else {
           title ="off"
       }

        return (<div className="Box">
            <button className='boxTitle' onClick={this.toggleMe}>
                {title}
               
            </button>
                    <p> switch is {title} </p>
        </div>  );
    }
}
 
export default Switcher;