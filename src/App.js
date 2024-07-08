import React, { Component } from 'react';
import Game from './Components/Game';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Interview Submission</h1>
          <h2 className="App-subtitle">Connect Four</h2>
        </header>

        <div id="Main">
          <Game />
        </div>

      </div>
    );
  }
}

export default App;
