import React from 'react';
import Search from './search/Search';
import ghPic from '../../src/assets/ghlogo.svg';

import './header.scss';

const Header = () => {
  return (
    <header className={'header'}>
      <img className="header__logo" src={ghPic} alt="ghlogo" />
      <Search />
    </header>
  );
};

export default Header;
