import React from 'react';
import { IContext } from '../types/types';

export const appContext = React.createContext<IContext>({
  userInfo: { profile: null, repos: [] },
  setUserInfo: () => {},
});
