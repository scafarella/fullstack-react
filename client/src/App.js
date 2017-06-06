import React, { Component } from 'react';
import './App.scss';
import TopNav from './components/topnav';
import Result from './components/result';
class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <Result />
      </div>
    );
  }
}

export default App;
