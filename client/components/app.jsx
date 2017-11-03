import React from 'react';
import ReactDom from 'react-dom';
import Photolist from './photolist.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return <div>
      <h1>Title Goes Here</h1>
      <button onClick={ () => axios.get('api.giphy.com/v1/gifs/random' )
      .then(function(response){ console.log(response)})
      .catch(function(error){console.error(error)}) }>Click me</button> 
      <div> 
        <Photolist />
      </div>
    </div>
  }
}

ReactDom.render(<App />, document.getElementById('app')); 