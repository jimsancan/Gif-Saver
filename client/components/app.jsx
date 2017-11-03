import React from 'react';
import ReactDom from 'react-dom';
import Photolist from './photolist.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div>
      <h1>Title Goes Here</h1>
      <button>Click me</button>
      <div> 
        <Photolist />
      </div>
    </div>
  }
}

ReactDom.render(<App />, document.getElementById('app')); 