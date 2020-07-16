import React, { useState } from 'react';
import NavHeader from '../components/NavHeader';
import Header from '../components/Header';
import AppsContainer from './AppsContainer';

const DashboardContainer = (props) => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);



  if (props.user.apps && !flag) {
    setCount(props.user.apps.length)
    setFlag(true);
  }

  if (props.user.apps && flag) {
    if (props.user.apps.length !== count) {
      setCount(props.user.apps.length)
    }
  }

  return (
    <div className="dash-container">
      <NavHeader />

      <div className="dash-main">
        <Header name={props.user.firstName} history={props.history} />
        <AppsContainer
          handleAppId={props.handleAppId}
          handleUserData={props.handleUserData}
          user={props.user}
          count={count}
        />
      </div>
      <div className="dash-footer" />
    </div>
  );
};

export default DashboardContainer;
