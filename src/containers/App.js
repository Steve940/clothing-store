import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import DisplayCase from './DisplayCase';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <DisplayCase/>
      </div>
    );
  }
}

export default App;
