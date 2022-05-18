import React from 'react';
import UnknownUser from '../../assets/unknownUser.svg';
import './errorPage.scss';

const ErrorPage = () => {
  return (
    <div className={'error-page'}>
      <img className={'error-page__img'} src={UnknownUser} alt="searchBig" />
      <p className={'error-page__title'}>User not found</p>
    </div>
  );
};

export default ErrorPage;
