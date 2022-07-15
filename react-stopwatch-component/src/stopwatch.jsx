import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isPaused: true, timer: 0 };
    this.incrementTimer = this.incrementTimer.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  incrementTimer() {
    this.intervalID = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }

  handleClick() {
    this.setState({ isPaused: !this.state.isPaused });
    if (this.state.isPaused) {
      this.incrementTimer();
    } else {
      clearInterval(this.intervalID);
    }
  }

  handleReset() {
    if (this.state.isPaused) {
      this.setState({ timer: 0 });
    }
  }

  render() {
    let iconClass;
    if (this.state.isPaused) {
      iconClass = 'fa-solid fa-play fa-2xl';
    } else {
      iconClass = 'fa-solid fa-pause fa-2xl';
    }
    return (
      <div>
        <div onClick={this.handleReset} className='container'>
          <h1 className='number'>{this.state.timer}</h1>
        </div>
        <div className='center'>
          <i onClick={this.handleClick} className={iconClass}></i>
        </div>
      </div>
    );
  }
}
