import React, { useState } from 'react';
import { globalContext } from '../context/context';
import StartPage from './startPage/StartPage';
// import ErrorPage from './errorPage/ErrorPage';
import InfoPage from './infoPage/InfoPage';

import './main.scss';
import { IRepos, IUser } from '../types/types';

const Main = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [repos, setRepos] = useState<IRepos | null>(null);
  const mainValues = {
    user,
    setUser,
    repos,
    setRepos,
  };
  return (
    <globalContext.Provider value={mainValues}>
      <main className={'main'}>{user ? <InfoPage /> : <StartPage />}</main>
    </globalContext.Provider>
  );
};

export default Main;
