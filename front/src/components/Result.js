import React from 'react';
import './Result.scss';
import saramin from '../saramin.json';

const Result = () => {
  return (
    <div className="result">
      {saramin.map((val, key) => {
        return <div>{val.title}</div>;
      })}
    </div>
  );
};

export default Result;
