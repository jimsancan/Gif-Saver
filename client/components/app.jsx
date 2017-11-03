import React from 'react';
import ReactDom from 'react-dom';
import Photo from './photo.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div>
      <h1>Title Goes Here</h1>
      <button>Click me</button>
      <div>
      <Photo photo={console.log('here')}/>
      </div>
    </div>
  }
}

ReactDom.render(<App />, document.getElementById('app')); 