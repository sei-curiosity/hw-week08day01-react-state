import React, { Component } from "react";

class Switcher extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false
    };
    this.style = {
        color: 'red'
    }
  }

  toggleButton = () => {
    let { toggle } = this.state;
    this.setState({
      toggle: !toggle
    });
  };
  render() {
    let onOrOff = "on";
    const { toggle } = this.state;
    if (toggle) {
      onOrOff = "on";
    } else {
      onOrOff = "off";
    }
    return (
      <React.Fragment>
        <p>
          <b>Switch is {onOrOff}</b>
        </p>
        <button onClick={this.toggleButton}>{onOrOff}</button>
      </React.Fragment>
    );
  }
}

export default Switcher;
