import React, { Component } from 'react';
import Body from './components/Body/Body';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3 className="hh">Trello Clone</h3>
        <Body />
        {/* <button>Logout</button> */}
      </div>
    );
  }
}

export default App;
