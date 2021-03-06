import React, { Component } from 'react';
import './app.css';
import Snake from './components/snake/components/SnakeGameProvider';

class App extends Component {

  render() {
    return (
      <div className="app">
        <div className="activeSnakeContainer">
          <Snake />
        </div>
      </div>
    );
  }
}

export default App;
