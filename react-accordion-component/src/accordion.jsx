import React from 'react';
export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { topic: '' };
    this.handleClick = this.handleClick.bind(this);
    this.topicList = this.topicList.bind(this);
  }

  handleClick(event) {
    this.setState({ topic: event.target.value });
  }

  listTopic(props) {
    return <li>{props.value}</li>;
  }

  topicList(props) {
    const topics = props.topics;
    const listTopics = topics.map(topic =>
      <ListTopic key={topic.name} value={topic.details} />
    );
  }

  render() {
    return (

      // <div>
      //   <div className='container'>
      //     <h1>Hypertext Markup Language</h1>
      //   </div>
      //   <div className='details-container'>
      //     <p className='details'></p>
      //   </div>
      //   <div className='container'>
      //     <h1>Cascading Style Sheets</h1>
      //   </div>
      //   <div className='details-container'>
      //     <p className='details'></p>
      //   </div>
      //   <div className='container'>
      //     <h1>JavaScript</h1>
      //   </div>
      //   <div className='details-container'>
      //     <p className='details'></p>
      //   </div>
      // </div>
    );
  }
}
