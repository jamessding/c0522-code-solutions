import React from 'react';
export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: '../images/001.png' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // setState of current image to next one
    this.setState();
  }

  render() {
    return (
      <div className="container">
        <div className="row margin-top">
          <div className="column-one-fourth left center">
            <i className="fas fa-chevron-left fa-5x"></i>
          </div>
          <div className="column-one-half overflow">
            <div className="row transition-div">
              <img data-id="0" src="../images/001.png" />
            </div>
          </div>
          <div className="column-one-fourth right center">
            <i className="fas fa-chevron-right fa-5x"></i>
          </div>
        </div>
        <div className="row justify-center">
          <i data-id="0" className="fas fa-circle fa-2x padding"></i>
          <i data-id="1" className="far fa-circle fa-2x padding"></i>
          <i data-id="2" className="far fa-circle fa-2x padding"></i>
          <i data-id="3" className="far fa-circle fa-2x padding"></i>
          <i data-id="4" className="far fa-circle fa-2x padding"></i>
        </div>
      </div>
    );
  }
}
