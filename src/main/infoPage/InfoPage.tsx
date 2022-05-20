import React from 'react';
import { appContext } from '../../context/context';
import FollowersPic from '../../assets/followers.svg';
import FollowingPic from '../../assets/following.svg';

import './infoPage.scss';
import Repos from './repos/Repos';
import EmptyRepos from './emptyRepos/EmptyRepos';

const InfoPage = () => {
  function round(num: number) {
    if (num > 1000) {
      return (num / 1000).toFixed(1) + 'k';
    } else return num;
  }
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
                      {value.userInfo.profile?.followers &&
                        round(value.userInfo.profile?.followers)}{' '}
                      followers
                    </span>
                  </div>
                  <div className="following">
                    <img src={FollowingPic} className="follows__icon" alt="following" />
                    <span className="follows-text">
                      {value.userInfo.profile?.following &&
                        round(value.userInfo.profile?.following)}{' '}
                      following
                    </span>
                  </div>
                </div>
              </div>
              <div className="info-page__repos">
                {value.userInfo.repos && value.userInfo.repos?.length > 0 ? (
                  <>
                    <p className="repos-count">Repositories ({value.userInfo.repos?.length})</p>
                    <Repos repos={value.userInfo.repos} />
                  </>
                ) : (
                  <EmptyRepos />
                )}
              </div>
            </>
          );
        }}
      </appContext.Consumer>
    </section>
  );
};

export default InfoPage;
