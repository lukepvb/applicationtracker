import React from 'react';
import { useHistory } from 'react-router-dom';
import NavHeader from '../components/NavHeader';
import Header from '../components/Header';
import AppsContainer from './AppsContainer';

const DashboardContainer = (props) => {

  return (
    <div className="dash-container">
      <NavHeader />

      <div className="dash-main">
        <Header name={props.user.firstName} history={props.history} />
        <AppsContainer handleAppId={props.handleAppId} user={props.user} />
      </div>
      <div className="dash-footer" />
    </div>
  );
};

export default DashboardContainer;
