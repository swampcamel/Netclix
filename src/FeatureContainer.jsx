import React from 'react';
import './FeatureContainer.scss';
import FeatureTabs from './FeatureTabs';
import CancelFeature from './CancelFeature';
import WatchFeature from './WatchFeature';
import PropTypes from 'prop-types';


function FeatureContainer(props) {
  let featureToDisplay;
  if(props.currentFeatureTab == "CancelFeature"){
    featureToDisplay = <CancelFeature/>
  }
  else if (props.currentFeatureTab == "WatchFeature") {
    featureToDisplay = <WatchFeature/>
  }

  return (
    <div>
      <FeatureTabs onChangeFeatureTab={props.onChangeFeatureTab}/>
      {featureToDisplay}
    </div>
  )
}

FeatureTabs.propTypes = {
  currentFeatureTab: PropTypes.string,
  onChangeFeatureTab: PropTypes.func
};

export default FeatureContainer;
