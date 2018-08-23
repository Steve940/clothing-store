import React, { Component } from 'react';
import './App.css';
import Article from '../components/article';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Article type='shirt'/>
        <Article type='pants'/>
        <Article type='shoes'/>
      </div>
    );
  }
}

export default App;
