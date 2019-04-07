import React, { Component } from 'react';
import './app.css';
import HomePage from './components/homepage/HomePage';

class App extends Component {

  render() {
    return (
      <div className="app">
          <HomePage />
      </div>
    );
  }
}

export default App;
