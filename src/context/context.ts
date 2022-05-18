import React from 'react';
import { IContext } from '../types/types';

export const globalContext = React.createContext<IContext>({
  user: null,
  setUser: () => {},
  repos: null,
  setRepos: () => {},
});
