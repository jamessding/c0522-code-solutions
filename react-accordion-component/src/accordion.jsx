import React from 'react';
export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { topic: '' };
    this.handleClick = this.handleClick.bind(this);
    this.createTopics = this.createTopics.bind(this);
  }

  handleClick(event) {
    this.setState((event.target.textContent === this.state.topic) ? { topic: '' } : { topic: event.target.textContent });
  }

  createTopics(props) {
    const topics = props.topics;
    return topics.map(topic => {
      const topicHidden = (topic.name === this.state.topic) ? '' : 'hidden';
      return (
        <div key={topic.name}>
          <div onClick={this.handleClick} className='container'>
            <h1>{topic.name}</h1>
          </div>
          <div className={`details-container ${topicHidden}`}>
            <p className='details'>{topic.details}</p>
          </div>
        </div>
      );
    }
    );
  }

  render() {
    return (
        <div>
          {
            this.createTopics(this.props)
          }
        </div>
    );
  }
}
