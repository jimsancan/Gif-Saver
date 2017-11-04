import React from 'react';
import ReactDom from 'react-dom';

class Photo extends React.Component {
  constructor(props) {
    super(props);


  }

render() {
  return (
    <div className="wrapper">
    <img src={this.props.photo} className="gif"/>
    </div>
  )
}
}

export default Photo;