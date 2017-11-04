import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    };
    this.getPhotos=this.getPhotos.bind(this)
  }
  getPhotos() {
    for(var i =0; i< 5; i++) {
      axios.get('/gifs')
      .then((response) => {
        console.log(this)
        this.state.gifs.push(response.data.data.image_url)}) // <img src=response.data.data.image_url>
      .catch(function(error){console.error(error)}
      )
    }
  };

  renderPhotos(array) {
    array.map((photo) => {
      return <Photo photo={photo}/> 
  })
  }

  

  render() {
    return <div>
      <h1>Title Goes Here</h1>
      <div onLoad={this.getPhotos()}> 
        <button onClick={console.log(this.state)}>click</button>
        <img src="https://media2.giphy.com/media/v7yEA9fukw80w/giphy.gif" ></img>
      </div>
    </div>
  }
}

ReactDom.render(<App />, document.getElementById('app')); 