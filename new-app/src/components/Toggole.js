
import React, { Component } from 'react';
class Toggole extends Component {
    state = {
        opend: false
    }
}

ToggoleOne = () => {
    const {opend} = this.state
    this.state ({
        opend =! opend
    })
}
render () {
    let {title,children} = this.props|
    const {opend} = this.state
    if (opend) {
        title = "ON"
    }
    else {
        title = "OFF"
    }
    return (
        <div className="box">
            <h1>switch is ON !!</h1>
            <button className="boxTitle" onClick = {this.ToggoleOn}> {title} </button>
            {opend && (
                <div className="boxContent">
                    {children}
                </div>
            )}
        </div>
    )
    }