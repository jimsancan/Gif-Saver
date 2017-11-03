import React from 'react';
import ReactDom from 'react-dom';
import Photo from './photo.jsx';

class Photolist extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      <Photo />
      </div>
    );
  }
}


export default Photolist;