import React, { Component } from 'react';
import './App.scss';
import Nav from './Nav'
import HomePage from './HomePage';
import Page2 from './Page2';
import { Switch, Route } from 'react-router-dom';


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
        <Switch>
          <Route exact path='/' render={(props) => {
            return (<HomePage match={props.match}
              onChangeFeatureTab={this.changeFeatureTab}
              currentFeatureTab={this.state.currentFeatureTab}/>)
            }
          } />
          <Route path='/page2' component={Page2}/>
      </Switch>
      </div>
    );
  }
}

export default App;
