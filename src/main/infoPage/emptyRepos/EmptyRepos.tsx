import React from 'react';
import noRepos from '../../../assets/noRepos.svg';
import './emptyRepos.scss';

const EmptyRepos = () => {
  return (
    <div className={'empty-repos-wrapper'}>
      <img className={'empty-repos-wrapper__img'} src={noRepos} alt="searchBig" />
      <p className={'empty-repos-wrapper__title'}>Repository list is empty</p>
    </div>
  );
};

export default EmptyRepos;
