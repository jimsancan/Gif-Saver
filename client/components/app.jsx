import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Photo from './photo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    };
    this.getPhotos=this.getPhotos.bind(this)
    this.renderPhotos = this.renderPhotos.bind(this);
  }
  getPhotos() {
    for(var i =0; i< 5; i++) {
      axios.get('/gifs')
      .then((response) => {
        this.state.gifs.push(response.data.data.image_url)}) // <img src=response.data.data.image_url>
      .catch(function(error){console.error(error)}
      )
    }
  };

  renderPhotos(array) {
    console.log(array);
    array.map((photo) => {
      return <Photo photo={photo}/> 
  })
  }

  componentWillMount() {
    this.getPhotos()
  }

  

  render() {
    return <div>
      <h1>Title Goes Here</h1>
      <div > 
        <button onClick={() =>{ this.renderPhotos(this.state.gifs)}}>click</button>
        
      </div>
    </div>
  }
}

ReactDom.render(<App />, document.getElementById('app')); 