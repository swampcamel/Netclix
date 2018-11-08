import React, { Component } from 'react';
import './App.scss';
import Nav from './Nav';
import Header from './Header';
import FeatureContainer from './FeatureContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Header/>
        <FeatureContainer/>
      </div>
    );
  }
}

export default App;
