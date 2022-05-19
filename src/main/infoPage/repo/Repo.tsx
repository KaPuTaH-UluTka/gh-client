import React from 'react';

import './repo.scss';
import { IRepo } from '../../../types/types';

const Repo = (props: { repo: IRepo }) => {
  const repo = props.repo;
  return (
    <div className={'repo-element'}>
      <a href={repo.html_url} target={'_blank'} className={'repo-element__title'} rel="noreferrer">
        {repo.name}
      </a>
      <p className={'repo-element__text'}>{repo.description}</p>
    </div>
  );
};

export default Repo;
