import React from 'react';
import { globalContext } from '../../context/context';

const InfoPage = () => {
  return (
    <section className={'info-page'}>
      <globalContext.Consumer>
        {(value) => {
          return (
            <>
              <div className="info-page__profile">
                <img src={value.user?.name} className="profile__img" alt="userAvatar" />
                <p className="profile__name">{value.user?.name}</p>
                <a className="profile__login">{value.user?.login}</a>
                <div className="profile__follows"></div>
              </div>
              <div className="info-page__repos"></div>
            </>
          );
        }}
      </globalContext.Consumer>
    </section>
  );
};

export default InfoPage;
