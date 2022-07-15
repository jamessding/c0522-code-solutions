import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    const isClicked = this.state.isClicked;
    if (isClicked) {
      return <button>Thanks!</button>;
    } else {
      return <button onClick = {this.handleClick}> Click Me!</button>;
    }
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <CustomButton />;
root.render(element);
