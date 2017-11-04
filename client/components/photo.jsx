import React from 'react';
import ReactDom from 'react-dom';

class Photo extends React.Component {
  constructor(props) {
    super(props);


  }

render() {
  return (
    <div>
    <p>helloooo</p>
    <img src={this.props.photo}> </img>
    </div>
  )
}
}

export default Photo;