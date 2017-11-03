import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render(props) {
    return <div>
      <h1>Title Goes Here</h1>
      <button>Click me</button>
      <div className="photos">
      {/* <Photolist /> */}
      </div>
    </div>
  }
}

ReactDom.render(<App />, document.getElementById('app')); 