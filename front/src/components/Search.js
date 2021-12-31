import React from 'react';
import './Search.scss';

const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="사람인으로 검색하기" />
      <button>검색</button>
    </div>
  );
};

export default Search;
