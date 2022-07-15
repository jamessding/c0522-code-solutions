import React from 'react';
export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  handleMenuClick() {
    this.setState({ isClicked: true });
  }

  handleBackClick() {
    this.setState({ isClicked: false });
  }

  render() {
    const isClicked = this.state.isClicked;
    if (!isClicked) {
      return (
        <div>
          <i onClick={this.handleMenuClick} className="fa-solid fa-bars fa-2xl"></i>
        </div>
      );
    } else {
      return (
        <div>
          <div className="overlay" onClick={this.handleBackClick}></div>
          <div className="pop-up-container">
            <h2 className="pop-up-text" onClick={this.handleBackClick}>Menu</h2>
            <h3 className="pop-up-text" onClick={this.handleBackClick}>About</h3>
            <h3 className="pop-up-text" onClick={this.handleBackClick}>Get Started</h3>
            <h3 className="pop-up-text" onClick={this.handleBackClick}>Sign In</h3>
          </div>
        </div>
      );
    }
  }
}
