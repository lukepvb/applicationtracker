import React, { useState } from 'react';
import NavHeader from '../components/NavHeader';
import Header from '../components/Header';
import AppsContainer from './AppsContainer';

const DashboardContainer = (props) => {
  const [yourAppsCount, setYourAppsCount] = useState(0);

  const [inProgressCount, setInProgressCount] = useState(0);
  const [inProgressRender, setInProgressRender] = useState([]);
  const [inProgressClicked, setInProgressClicked] = useState(false);

  const [completedCount, setCompletedCount] = useState(0);
  const [completedRender, setCompletedRender] = useState([]);
  const [completedClicked, setCompletedClicked] = useState(false);

  const [rejectedCount, setRejectedCount] = useState(0);
  const [rejectedRender, setRejectedRender] = useState([]);
  const [rejectedClicked, setRejectedClicked] = useState(false);

  const [flag, setFlag] = useState(false);




  const [filteredAppsRender, setFilteredAppsRender] = useState(props.user.apps);




  /* Below we handle the filtering of different apps 
   to be passed down to AppsContainer */
  const handleAppsFilter = (status) => {
    // This is where we will toggle the button (true or false) to determine which filtered apps are rendered //
    if (status === 'In Progress' && inProgressClicked === false) {
      setInProgressClicked(true);
      setCompletedClicked(false);
      setRejectedClicked(false);


      setFilteredAppsRender(inProgressRender);
    } else if (status === 'In Progress' && inProgressClicked === true) {
      setInProgressClicked(false);
      setFilteredAppsRender(props.user.apps);
    }

    if (status === 'Completed' && completedClicked === false) {
      setInProgressClicked(false);
      setRejectedClicked(false);
      setCompletedClicked(true);

      setFilteredAppsRender(completedRender);
    } else if (status === 'Completed' && completedClicked === true) {
      setCompletedClicked(false);
      setFilteredAppsRender(props.user.apps);
    }

    if (status === 'Rejected' && rejectedClicked === false) {
      setInProgressClicked(false);
      setCompletedClicked(false);
      setRejectedClicked(true);
      setFilteredAppsRender(rejectedRender);
    } else if (status === 'Rejected' && rejectedClicked === true) {
      setRejectedClicked(false);
      setFilteredAppsRender(props.user.apps);
    }
  }



  /* This is where we are setting the different counts of applications */

  if (props.user.apps && !flag) {
    setYourAppsCount(props.user.apps.length)
    setFilteredAppsRender(props.user.apps);

    const appsInProgress = props.user.apps.filter(app => app.status === 'In Progress');
    setInProgressCount(appsInProgress.length);
    setInProgressRender(appsInProgress);

    const appsCompleted = props.user.apps.filter(app => app.status === 'Complete');
    setCompletedCount(appsCompleted.length);
    setCompletedRender(appsCompleted);

    const appsRejected = props.user.apps.filter(app => app.status === 'Rejected');
    setRejectedCount(appsRejected.length);
    setRejectedRender(appsRejected);



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
          handleAppsFilter={handleAppsFilter}
          filteredAppsRender={filteredAppsRender}

        />
      </div>
      <div className="dash-footer" />
    </div>
  );
};

export default DashboardContainer;
