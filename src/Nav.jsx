import React from 'react';
import logo from './logo.svg';
import './Nav.scss';
import {Button} from 'react-materialize';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div className="Nav-wrapper">
      <Link to="/">
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
      <Link to="/page2">
        <Button className='red darken-1 waves-effect waves-snafu'>button</Button>
      </Link>
    </div>
  )
};

export default Nav;
