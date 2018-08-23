import React, { Component } from 'react';
import './App.css';
import Article from '../components/Article';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Article type='shirt'/>
        <Article type='pants'/>
        <Article type='shoes'/>
      </div>
    );
  }
}

export default App;
