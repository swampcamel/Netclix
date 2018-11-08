import React from 'react';
import logo from './logo.svg';
import './Nav.scss';
import {Button} from 'react-materialize';

function Nav() {
  return (
    <div className="Nav-wrapper">
      <img src={logo} className="App-logo" alt="logo" />
      <Button className='red darken-1 waves-effect waves-snafu'>button</Button>
    </div>
  )
};

export default Nav;
