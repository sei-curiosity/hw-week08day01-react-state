import React, { Component } from 'react';

class ToggleButton extends Component {
    constructor(props){
        super(props)
        this.state={
            on: false

        }
    }
   
    ToggleMe= () => {
          const{on} =this.state
        this.setState({
            on :!on
        })
    }
    render() { 
        let {children,title } = this.props 
        const {on}=this.state
        if (on){
            title ='switch on'
            
        }
        else {
            title='switch off'
        }
        return ( 
            <React.Fragment> 
                  <p><b>Switch is </b></p>
    <button onClick={this.ToggleMe}>{title}</button>
{on&&(
    <div>
        {children}
    </div>

)}
               </React.Fragment> 
         );
    }
}
 
export default ToggleButton;