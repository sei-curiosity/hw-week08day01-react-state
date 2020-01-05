import React, { Component } from 'react'

class TogBox extends Component {
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
        let { title } = this.props
        const { opened } = this.state

        if(opened) {
            title = "OFF"


        } else {
            title = "ON"
        }
        return(
                <div className={ title }>
                    <p><b>Switch is { title }</b></p>
                    <button className="boxTitle" onClick = {this.ToggleMe}> 
                    {title}
                    </button>
                </div>
        )
    }
}

export default TogBox