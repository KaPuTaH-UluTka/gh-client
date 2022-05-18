import React, { useContext } from 'react';
import './search.scss';
import { getInfo } from '../../api/api';
import { globalContext } from '../../context/context';

const Search = () => {
  const context = useContext(globalContext);
  const refSearchValue: React.RefObject<HTMLInputElement> = React.createRef();
  async function submitSearch(e: React.FormEvent) {
    e.preventDefault();
    const user = refSearchValue.current ? refSearchValue.current.value : '';
    const data = await getInfo(user);
    context.setUser(data[0]);
    context.setRepos(data[1]);
    console.log(context.user);
  }
  return (
    <div className={'search'}>
      <form className={'search__form'} onSubmit={(e) => submitSearch(e)}>
        <input className={'search__input'} type="text" ref={refSearchValue} />
        <button type="submit" className={'search__submit'} />
      </form>
    </div>
  );
};

export default Search;
