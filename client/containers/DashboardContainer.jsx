import React, { useState } from 'react';
import NavHeader from '../components/NavHeader';
import Header from '../components/Header';
import AppsContainer from './AppsContainer';

const DashboardContainer = (props) => {
  const [yourAppsCount, setYourAppsCount] = useState(0);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [rejectedCount, setRejectedCount] = useState(0);
  const [flag, setFlag] = useState(false);




  /* This is where we are setting the different counts of applications */

  if (props.user.apps && !flag) {
    setYourAppsCount(props.user.apps.length)

    const appsInProgress = props.user.apps.filter(app => app.status === 'In Progress');
    setInProgressCount(appsInProgress.length);

    const appsCompleted = props.user.apps.filter(app => app.status === 'Complete');
    setCompletedCount(appsCompleted.length);

    const appsRejected = props.user.apps.filter(app => app.status === 'Rejected');
    setRejectedCount(appsRejected.length);



    setFlag(true);
  }

  if (props.user.apps && flag) {
    if (props.user.apps.length !== yourAppsCount) {
      setYourAppsCount(props.user.apps.length)
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
          yourAppsCount={yourAppsCount}
          inProgressCount={inProgressCount}
          completedCount={completedCount}
          rejectedCount={rejectedCount}
        />
      </div>
      <div className="dash-footer" />
    </div>
  );
};

export default DashboardContainer;
