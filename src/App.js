import React, { Component } from 'react';
import './App.scss';
import Nav from './Nav';
import Header from './Header';
import FeatureContainer from './FeatureContainer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {currentFeatureTab: "CancelFeature"};
    this.changeFeatureTab = this.changeFeatureTab.bind(this);
  };

  changeFeatureTab(clickedTab) {
    this.setState({currentFeatureTab: clickedTab})
  }

  render() {
    return (
      <div className="App">
        <Nav/>
        <Header/>
        <FeatureContainer onChangeFeatureTab={this.changeFeatureTab} currentFeatureTab={this.state.currentFeatureTab}/>
      </div>
    );
  }
}

export default App;
