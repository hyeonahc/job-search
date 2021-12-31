import React from 'react';
import './Dashboard.scss';
import Filter from './Filter';
import Search from './Search';
import Result from './Result';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Filter />
      <div className="content">
        <Search />
        <Result />
      </div>
    </div>
  );
};

export default Dashboard;
