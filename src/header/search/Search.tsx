import React, { useContext, useState } from 'react';
import './search.scss';
import { getInfo } from '../../api/api';
import { appContext } from '../../context/context';

const Search = () => {
  const { setUserInfo, setResponseErr, setInitialState } = useContext(appContext);
  const refSearchValue: React.RefObject<HTMLInputElement> = React.createRef();
  const [inProgress, setInProgress] = useState(false);

  async function submitSearch(e: React.FormEvent) {
    e.preventDefault();
    setInProgress(true);
    const user = refSearchValue.current ? refSearchValue.current.value : '';
    const data = await getInfo(user);
    setInitialState(false);
    if (data) {
      setResponseErr(false);
      setUserInfo({ profile: data.userInfo, repos: data.reposInfo });
    } else {
      setResponseErr(true);
    }
    setInProgress(false);
  }

  return (
    <div className={'search'}>
      <form className={'search__form'} onSubmit={(e) => submitSearch(e)}>
        <input className={'search__input'} type="text" ref={refSearchValue} />
        <button type="submit" className={'search__submit'} />
      </form>
      {inProgress ? <div className={'loading'} /> : null}
    </div>
  );
};

export default Search;
