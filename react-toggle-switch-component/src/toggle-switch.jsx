import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isToggled: false
    };
  }

  handleClick() {
    this.setState(state => ({
      isToggled: !state.isToggled
    }));
  }

  render() {
    const isToggled = this.state.isToggled;
    if (!isToggled) {
      return (
        <div className="display-flex">
          <div className="container off">
            <div onClick={this.handleClick} className="slider left"></div>
          </div>
          <h1 onClick={this.handleClick} className="label">OFF</h1>
        </div>
      );
    }
    return (
      <div className="display-flex">
        <div className="container on">
          <div onClick={this.handleClick} className="slider right"></div>
        </div>
        <h1 onClick={this.handleClick} className="label">ON</h1>
      </div>
    );
  }
}
