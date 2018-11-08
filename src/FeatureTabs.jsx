import React from 'react';
import doorIcon from './dooricon.svg';
import computer from './computer.svg';
import priceTag from './pricetag.svg';


function FeatureTabs() {
  return (
    <div className="feature-tabs-container">
      <div className="feature-tabs">
        <div className="feature-tab">
        <img src={doorIcon} className="App-logo" alt="logo" />
        <span>No commitments</span>
        <span>Cancel online at anytime</span>
        </div>
        <div className="feature-tab">
        <img src={computer} className="App-logo" alt="logo" />
        <span>Watch anywhere</span>
        </div>
        <div className="feature-tab">
        <img src={priceTag} className="App-logo" alt="logo" />
        <span>No commitments</span>
        </div>
      </div>
    </div>
  )
}

export default FeatureTabs;
