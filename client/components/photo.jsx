import React from 'react';
import ReactDom from 'react-dom';

class Photo extends React.Component {
  constructor(props) {
    super(props);


  }

render() {
  return (
    <div>
    <img src={this.props.photo}/>
    </div>
  )
}
}

export default Photo;