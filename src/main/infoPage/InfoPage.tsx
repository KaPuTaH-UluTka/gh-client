import React from 'react';
import { appContext } from '../../context/context';

const InfoPage = () => {
  return (
    <section className={'info-page'}>
      <appContext.Consumer>
        {(value) => {
          return (
            <>
              <div className="info-page__profile">
                <img
                  src={value.userInfo.profile?.avatar_url}
                  className="profile__img"
                  alt="userAvatar"
                />
                <p className="profile__name">{value.userInfo.profile?.name}</p>
                <a className="profile__login">{value.userInfo.profile?.login}</a>
                <div className="profile__follows"></div>
              </div>
              <div className="info-page__repos"></div>
            </>
          );
        }}
      </appContext.Consumer>
    </section>
  );
};

export default InfoPage;
