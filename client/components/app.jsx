import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div>
      <h1>Title Goes Here</h1>
      <button>Click me</button>
    </div>
  }
}

ReactDom.render(<App />, document.getElementById('app')); 