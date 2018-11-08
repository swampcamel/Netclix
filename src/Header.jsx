import React from 'react';
import './Header.scss';
import { Button } from 'react-materialize';

function Header() {
  return (
    <div className="header-bg">
      <div className="gradient-overlay">
        <div className="splash">
          <h1>See what's next.</h1>
          <h4>WATCH ANYWHERE. CANCEL ANYTIME.</h4>
          <div className="btn-wrap">
          <Button className='red darken-2 waves-effect waves-snafu flex-btn'><span>JOIN FREE FOR A MONTH</span> <i className="material-icons">chevron_right</i></Button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header;
