import React from 'react';
import './Result.scss';
// import Saramin from '../saramin.json';
import Table from './Table';

const Result = () => {
  return (
    <div className="result">
      {/* {Saramin.map((val, key) => {
        return <div>{val.title}</div>;
      })} */}
      <Table />
    </div>
  );
};

export default Result;
