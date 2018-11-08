import React from 'react';
import './FeatureContainer.scss';
import FeatureTabs from './FeatureTabs';
import CancelFeature from './CancelFeature';
import WatchFeature from './WatchFeature';
import { Switch, Route } from 'react-router-dom';

function FeatureContainer() {
  return (
    <div>
      <FeatureTabs/>
      <Switch>
        <Route exact path='/' component={CancelFeature} />
        <Route path='/watchfeature' component={WatchFeature} />
        <Route path='/pricefeature' component={WatchFeature} />
      </Switch>
    </div>
  )
}

export default FeatureContainer;
