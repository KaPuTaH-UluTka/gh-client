import React from 'react';
import './startPage.scss';
import SearchPic from '../../assets/search.svg';

const StartPage = () => {
  return (
    <div className={'start-page'}>
      <img className={'start-page__img'} src={SearchPic} alt="searchBig" />
      <p className={'start-page__title'}>Start with searching a GitHub user</p>
    </div>
  );
};

export default StartPage;
