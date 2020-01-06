import React, { Component } from 'react'

class Switch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            opened: false
        }
    }

    toggleButton = ()=>{
        const { opened } = this.state
        this.setState ({
            opened: !opened
        })
    }

    render() {
        let { title, children } = this.props
        const { opened } = this.state

        if(opened) {
            title = "Switch off"
        } else {
            title = "Switch On"
        }
        return(
           
                <div classNAme="box">
                    <button className="boxTitle" onClick = {this.toggleButton}> 
                    {title}
                    </button>
                    
                </div>
        )
    }
}

export default Switch