import React from 'react';

export interface IUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  followers: number;
  following: number;
}

export interface IRepo {
  name: string;
  full_name: string;
  html_url: string;
  description: string;
}

export interface IUserInfo {
  profile: IUser | null;
  repos: IRepo[] | null;
}
export interface IContext {
  userInfo: IUserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<IUserInfo>>;
}
