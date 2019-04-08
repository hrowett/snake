import React, { Component } from 'react';
import './app.css';
import Snake from './components/games/snake/components/SnakeGameProvider';

class App extends Component {

  render() {
    return (
      <div className="app">
        <div className="snakeGameContainer">
          <Snake />
        </div>
      </div>
    );
  }
}

export default App;
