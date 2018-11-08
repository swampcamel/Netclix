import React from 'react';
import {Button} from 'react-materialize';

function CancelFeature() {
  return (
    <div className="tab-wrapper left-align">
      <div className="cancel-text">
      <h4>If you decide Netflix isn't for you - no problem. No commitment.</h4> <h4>Cancel online anytime.</h4>
      <div className="btn-wrap">
        <Button className='red darken-3 waves-effect waves-snafu'>JOIN FREE FOR A MONTH</Button>
        </div>
      </div>
      <div><img height="400px" src="https://assets.nflxext.com/ffe/siteui/acquisition/home/thisIsNetflix/modules/asset_cancelanytime_withdevice.png"/></div>
    </div>
  )
}

export default CancelFeature;
