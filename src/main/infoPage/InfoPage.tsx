import React from 'react';
import { appContext } from '../../context/context';
import FollowersPic from '../../assets/followers.svg';
import FollowingPic from '../../assets/following.svg';

import './infoPage.scss';
import Repo from './repo/Repo';

const InfoPage = () => {
  return (
    <section className={'info-page'}>
      <appContext.Consumer>
        {(value) => {
          return (
            <>
              <div className="profile">
                <img
                  src={value.userInfo.profile?.avatar_url}
                  className="profile__img"
                  alt="userAvatar"
                />
                <p className="profile__name">{value.userInfo.profile?.name}</p>
                <a
                  href={value.userInfo.profile?.html_url}
                  target="_blank"
                  className="profile__login"
                  rel="noreferrer"
                >
                  {value.userInfo.profile?.login}
                </a>
                <div className="profile__follows">
                  <div className="followers">
                    <img src={FollowersPic} className="follows__icon" alt="followers" />
                    <span className="follows-text">
                      {value.userInfo.profile?.followers} followers
                    </span>
                  </div>
                  <div className="following">
                    <img src={FollowingPic} className="follows__icon" alt="following" />
                    <span className="follows-text">
                      {value.userInfo.profile?.following} following
                    </span>
                  </div>
                </div>
              </div>
              <div className="info-page__repos">
                <p className="repos-count">Repositories ({value.userInfo.repos?.length})</p>
                <div className="repos-wrapper">
                  <Repo />
                  <Repo />
                  <Repo />
                  <Repo />
                </div>
              </div>
            </>
          );
        }}
      </appContext.Consumer>
    </section>
  );
};

export default InfoPage;
