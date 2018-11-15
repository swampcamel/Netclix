import React from 'react';
import Header from './Header'
import FeatureContainer from './FeatureContainer';
import PropTypes from 'prop-types';

function HomePage(props) {
    console.log(props)
  return (
    <div>
    <Header match={props.match}/>
    <FeatureContainer onChangeFeatureTab={props.onChangeFeatureTab} currentFeatureTab={props.currentFeatureTab}/>
  </div>
  )
}

export default HomePage;
