import React from 'react';
import './Dashboard.scss';
import Filter from './Filter';
import Search from './Search';
import Result from './Result';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Filter></Filter>
      <div className="content">
        <Search></Search>
        <Result></Result>
      </div>
    </div>
  );
};

export default Dashboard;
