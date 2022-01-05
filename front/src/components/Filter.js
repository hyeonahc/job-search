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
    </div>
  );
};

export default Filter;
