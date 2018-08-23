import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import DisplayCase from './DisplayCase';
import Scroll from '../components/Scroll';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Scroll>
          <DisplayCase/>
        </Scroll>

      </div>
    );
  }
}

export default App;
