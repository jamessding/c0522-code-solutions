import React from 'react';

export default class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { clicks: 0 };
  }

  handleClick() {
    this.setState(state => ({
      clicks: state.clicks + 1
    }));
  }

  render() {
    const clicks = this.state.clicks;
    if (clicks < 4) {
      return <button onClick={this.handleClick} className='blue button'>Hot Button</button>;
    } else if (clicks < 7) {
      return <button onClick={this.handleClick} className='purple button'>Hot Button</button>;
    } else if (clicks < 10) {
      return <button onClick={this.handleClick} className='red button'>Hot Button</button>;
    } else if (clicks < 13) {
      return <button onClick={this.handleClick} className='orange button'>Hot Button</button>;
    } else if (clicks < 16) {
      return <button onClick={this.handleClick} className='yellow button'>Hot Button</button>;
    } else {
      return <button onClick={this.handleClick} className='white button'>Hot Button</button>;
    }
  }
}
