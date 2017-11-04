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
    for(var i =0; i< 6; i++) {
      axios.get('/gifs')
      .then((response) => {
        // this.setState({})
        this.setState((previousState) => { 
          previousState.gifs.push(response.data.data.image_url);
          return previousState; 
        }) 
      }) 
      .catch(function(error){console.error(error)}
      )
    }
  };

  renderPhotos(array) {
    console.log(array);
    return array.map((photo) => {
      return <Photo photo={photo}/> 
    })
  }

  componentWillMount() {
    this.getPhotos()
  }


  render() {
    return <div>
      <h1>Gifs</h1>
      <div className="button"> 
       <button onClick={() => {window.location.reload()}}> new gifs </button> 
      <button onClick={() => {this.setState(this.state.gifs = [])}}>clear gifs</button>
          {this.state.gifs.length ? this.state.gifs.map(gif =>  <Photo photo={gif}/>) : null }
      </div>
    </div>
  }
}

ReactDom.render(<App />, document.getElementById('app')); 