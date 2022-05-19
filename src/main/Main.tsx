import React from 'react';
import { appContext } from '../context/context';
import StartPage from './startPage/StartPage';
import InfoPage from './infoPage/InfoPage';
import ErrorPage from './errorPage/ErrorPage';

const Main = () => {
  return (
    <main className={'main'}>
      <appContext.Consumer>
        {(value) => {
          if (value.initialState) {
            return <StartPage />;
          } else if (value.responseErr) {
            return <ErrorPage />;
          } else return <InfoPage />;
        }}
      </appContext.Consumer>
    </main>
  );
};

export default Main;
