import React from 'react';

import './repo.scss';

const Repo = () => {
  return (
    <div className={'repo-element'}>
      <a className={'repo-element__title'}>react-hot-loader</a>
      <p className={'repo-element__text'}>
        Tweak React components in real time. (Deprecated: use Fast Refresh instead.
      </p>
    </div>
  );
};

export default Repo;
