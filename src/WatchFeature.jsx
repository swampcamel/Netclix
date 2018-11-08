import React from 'react';
import {Button} from 'react-materialize'
import WatchFeatureBlurb from './WatchFeatureBlurb';

function WatchFeature() {
  const blurbs = [
    {
      imageUrl: "https://assets.nflxext.com/ffe/siteui/acquisition/home/thisIsNetflix/modules/asset_TV_UI.png",
      headline: "Watch on your TV",
      text: "Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
    },
    {
      imageUrl: "https://assets.nflxext.com/ffe/siteui/acquisition/home/thisIsNetflix/modules/asset_mobile_tablet_UI_2.png"
    },
    {
      imageUrl: "https://assets.nflxext.com/ffe/siteui/acquisition/home/thisIsNetflix/modules/asset_website_UI.png"
    }
  ]
  return (
    <div className="tab-wrapper">
      <div className="watch-topbar">
        <h5>Watch TV shows and movies anytime, anywhere — personalized for you.</h5>
        <Button className='red darken-3 waves-effect waves-snafu'>JOIN FREE FOR A MONTH</Button>
      </div>
    </div>
  )
}

export default WatchFeature;
