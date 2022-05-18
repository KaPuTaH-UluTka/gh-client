import React, { useState } from 'react';
import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import { appContext } from './context/context';
import { IUserInfo } from './types/types';

function App() {
  const [userInfo, setUserInfo] = useState<IUserInfo>({ profile: null, repos: [] });
  return (
    <appContext.Provider value={{ userInfo, setUserInfo }}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </appContext.Provider>
  );
}

export default App;
