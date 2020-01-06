import React, { Component } from "react";

class Switcher extends Component {
  state = {
    toggle: false
  };

  toggleButton = () => {
    const { toggle } = this.state;
    this.setState({ toggle: !toggle });
  };

  toggleText = (textOne, textTwo) => {
    const { toggle } = this.state;
    return toggle ? textOne : textTwo;
  };

  render() {
    const onOrOff = this.toggleText("ON", "OFF");
    const color = this.toggleText("green", "red");

    return (
      <React.Fragment>
        <p>
          <b>
            Switch is <span className={color}>{onOrOff}</span>
          </b>
        </p>
        <button onClick={this.toggleButton}>{onOrOff}</button>
      </React.Fragment>
    );
  }
}

export default Switcher;
