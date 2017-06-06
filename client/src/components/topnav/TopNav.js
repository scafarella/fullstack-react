import React from 'react';
import './TopNav.scss';
import logo from '../../logo.svg';

import Menu from './Menu.js';

const TopNav = () => (
  <header className='header'>
    <a href="/">
      <span className='logoText'>Skyscanner</span>
      <img className='logo' alt="Skyscanner" src={logo}/>
    </a>
     <Menu />
  </header>
);

export default TopNav;
