import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handlePassword = this.handlePassword.bind(this);
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    let message;
    let icon = 'fa-solid fa-x fa-lg red';
    const password = this.state.password;
    if (password === '') {
      message = 'A password is required.';
    } else if (password.length < 8) {
      message = 'Your password is too short.';
    } else {
      message = '';
      icon = 'fa-solid fa-check fa-lg green';
    }
    return (
      <div>
        <label htmlFor="signup-password">Password</label><br></br>
        <input name="password" type="password" id="signup-password" value={this.state.password} onChange={this.handlePassword}></input>
        <i className={icon}></i>
        <p className='red'>{message}</p>
      </div>
    );
  }
}
