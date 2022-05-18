import React from 'react';
import { appContext } from '../context/context';
import StartPage from './startPage/StartPage';
// import ErrorPage from './errorPage/ErrorPage';
import InfoPage from './infoPage/InfoPage';

import './main.scss';

const Main = () => {
  return (
    <main className={'main'}>
      <appContext.Consumer>
        {(value) => (value.userInfo.profile ? <InfoPage /> : <StartPage />)}
      </appContext.Consumer>
    </main>
  );
};

export default Main;
