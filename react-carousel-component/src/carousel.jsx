import React from 'react';
export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      interval: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.createImages = this.createImages.bind(this);
    this.createDots = this.createDots.bind(this);
  }

  handleClick(event) {
    if (event.target.tagName === 'I') {
      clearInterval(this.state.interval);
      this.setState({
        interval: setInterval(
          () => this.setState(
            { index: (this.state.index === this.props.images.length - 1) ? 0 : this.state.index + 1 }),
          3000
        )
      });
    }
    if (event.target.className === 'fas fa-chevron-left fa-5x') {
      this.setState({ index: (this.state.index === 0) ? this.props.images.length - 1 : this.state.index - 1 });
    } else if (event.target.className === 'fas fa-chevron-right fa-5x') {
      this.setState({ index: (this.state.index === this.props.images.length - 1) ? 0 : this.state.index + 1 });
    } else if (event.target.className === 'far fa-circle fa-2x padding') {
      this.setState({ index: Number(event.target.id) });
    }
  }

  createImages(props) {
    const images = props.images;
    return images.map(image => {
      const imageIndex = images.indexOf(image);
      const imageHidden = (imageIndex === this.state.index) ? '' : 'hidden';
      return (
        <img src={images[imageIndex].url} key={imageIndex} className={imageHidden} />
      );
    });
  }

  createDots(props) {
    const images = props.images;
    return images.map(image => {
      const imageIndex = images.indexOf(image);
      const dotClass = (imageIndex === this.state.index) ? 'fas fa-circle fa-2x padding' : 'far fa-circle fa-2x padding';
      return (
        <i id={imageIndex} onClick={this.handleClick} key={imageIndex} className={dotClass} />
      );
    });
  }

  componentDidMount() {
    this.setState({
      interval: setInterval(
        () => this.setState(
          { index: (this.state.index === this.props.images.length - 1) ? 0 : this.state.index + 1 }),
        3000
      )
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row margin-top">
          <div className="column-one-fourth left center">
            <i onClick={this.handleClick} className="fas fa-chevron-left fa-5x"></i>
          </div>
          <div className="column-one-half overflow">
            <div className="row transition-div">
              {
                this.createImages(this.props)
              }
            </div>
          </div>
          <div className="column-one-fourth right center">
            <i onClick={this.handleClick} className="fas fa-chevron-right fa-5x"></i>
          </div>
        </div>
        <div className="row justify-center">
          {
            this.createDots(this.props)
          }
        </div>
      </div>
    );
  }
}
