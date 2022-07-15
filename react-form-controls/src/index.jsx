import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="signup-username">Username</label>
        <input name="username" type="text" id="signup-username" value={this.state.username} onChange={this.handleUsernameChange}></input>
        <label htmlFor="signup-password">Password</label>
        <input name="password" type="password" id="signup-password" value={this.state.password} onChange={this.handlePasswordChange}></input>
        <button>Sign Up</button>
      </form>
    );
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RegistrationForm />);
