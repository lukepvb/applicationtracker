import React from 'react';
import NavHeader from '../components/NavHeader';
import Header from '../components/Header';
import AppsContainer from '../containers/AppsContainer';

const DashboardContainer = (props) => {
  return (
    <div className="dash-container">
      <NavHeader />

      <div className="dash-main">
        <Header />
        <AppsContainer />
      </div>
      <div className="dash-footer"></div>
    </div>
  );
};

export default DashboardContainer;
