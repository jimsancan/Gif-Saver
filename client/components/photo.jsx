import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

class Photo extends React.Component {
  constructor(props) {
    super(props);
  }

postdb(){
  console.log(this.props.photo);
  axios.post('/dbreq', {
    url: this.props.photo,
  }) 
  .then(function(response) {
    console.log('posted')
  })
  .catch(function(error){
    console.error(error)
  })
}

render() {
  return (
    <div className="wrapper">
    <img onClick={() => {this.postdb() }} src={this.props.photo} className="gif"/>
    </div>
  )
}
}

export default Photo;