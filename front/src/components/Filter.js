import React from 'react';
import './Filter.scss';
import SelectFilter from './SelectFilter';
import logo from '../img/logo.png';

const Filter = () => {
  return (
    <div className="filter">
      <h1>
        <img src={logo} alt="" width="200" />
      </h1>
      <h2>Filter</h2>
      <SelectFilter></SelectFilter>
      <button>필터 적용하기</button>
    </div>
  );
};

export default Filter;