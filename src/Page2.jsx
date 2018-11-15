import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Page2(props) {
  console.log(props)
  return(
    <div>
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={props.match.path === '/page2' ? 'SlideIn' : 'SlideOut'}
      >
      <h2>This is Page 2</h2>
      </ReactCSSTransitionGroup>
    </div>
  )
}

export default Page2;
