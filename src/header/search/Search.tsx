import React from 'react';
import './search.scss';

const Search = () => {
  return (
    <div className={'search'}>
      <form className={'search__form'}>
        <input className={'search__input'} type="text" />
        <button type="submit" className={'search__submit'} />
      </form>
    </div>
  );
};

export default Search;
