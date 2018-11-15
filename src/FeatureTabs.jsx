import React from 'react';
import doorIcon from './dooricon.svg';
import computer from './computer.svg';
import priceTag from './pricetag.svg';
import {Tabs} from 'react-materialize';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function FeatureTabs(props) {
    return (
    <div className="feature-master">
      <div className="feature-tabs-container">
        <div className="feature-tabs">
          <div onClick={() => {props.onChangeFeatureTab("CancelFeature")}} className="feature-tab">
            <img src={doorIcon} className="App-logo" alt="logo" />
            <span>No commitments</span>
            <span>Cancel online at anytime</span>
          </div>
          <div onClick={() => {props.onChangeFeatureTab("WatchFeature")}} className="feature-tab">
            <img src={computer} className="App-logo" alt="logo" />
            <span>Watch anywhere</span>
          </div>
          <div onClick={() => {props.onChangeFeatureTab("CancelFeature")}} className="feature-tab">
            <img src={priceTag} className="App-logo" alt="logo" />
            <span>No commitments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureTabs;
