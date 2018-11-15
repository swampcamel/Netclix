import React from 'react';
import './Header.scss';
import { Button } from 'react-materialize';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Header(props) {

  return (
    <div className="header-bg">
      <div className="gradient-overlay">
        <ReactCSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={600}
          transitionEnterTimeout={600}
          transitionLeaveTimeout={200}
          transitionName={props.match.path === '/' ? 'homeSlideIn' : 'homeSlideOut'}
        >
        <div className="splash">
          <h1>See what's next.</h1>
          <h4>WATCH ANYWHERE. CANCEL ANYTIME.</h4>
          <div className="btn-wrap">
          <Button className='red darken-2 waves-effect waves-snafu flex-btn'><span>JOIN FREE FOR A MONTH</span> <i className="material-icons">chevron_right</i></Button>
          </div>
        </div>
      </ReactCSSTransitionGroup>
      </div>

    </div>
  )
}

export default Header;
