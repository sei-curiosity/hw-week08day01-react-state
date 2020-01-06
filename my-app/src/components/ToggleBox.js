import React, { Component } from 'react'

class ToggleBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            opened: false
        }
    }

    ToggleMe = ()=>{
        const { opened } = this.state
        this.setState ({
            opened: !opened
        })
    }

    render() {
        let { title, children } = this.props
        const { opened } = this.state

        if(opened) {
            title = "ON"
        } else {
            title = "OFF"
        }
        return(
                <div classNAme="box">
                    <h1>Switch is ON</h1>
                    <button className="boxTitle" onClick = {this.ToggleMe}> 
                    {title}
                    </button>
                    {opened && (
                        <div className ="boxContent"> 
                            {children}
                        </div>
                    )}
                </div>
        )
    }
}

export default ToggleBox