import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  render() {
    return <div>
      <h1>stuff is showing up</h1>
      <img src="dog.jpeg"/>
    </div>
  }
}

ReactDom.render(<App />, document.getElementById('app')); 