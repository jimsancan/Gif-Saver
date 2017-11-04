import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    };
  }
  getPhotos() {axios.get('/gifs')
    .then(function(response){console.log(response)})
    .catch(function(error){console.error(error)}
  )};

  render() {
    return <div>
      <h1>Title Goes Here</h1>
      <div> 
        <button onClick={this.getPhotos()}>click </button>
      </div>
    </div>
  }
}

ReactDom.render(<App />, document.getElementById('app')); 