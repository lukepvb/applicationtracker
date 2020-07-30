import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  const [favCount, setFavCount] = useState(0);
  const [favRender, setFavRender] = useState([]);
  const [favFilterClicked, setFavFilterClicked] = useState(false);
  const [flag, setFlag] = useState(false);
  const [filteredAppsRender, setFilteredAppsRender] = useState(props.user.apps);
  const [modal, setModal] = useState(false);
  const [appFilled, setAppFilled] = useState(false);

  const toggle = () => setModal(!modal);

  const handleClick = () => {
    toggle();
    setAppFilled(false);
  };

  const resetAppArrays = () => {
    setFilteredAppsRender(props.user.apps);

    const appsFavorited = props.user.apps.filter((app) => app.favorite === true);
    const appsInProgressAlt = props.user.apps.filter((app) => app.status === 'In Progress');
    const appsCompletedAlt = props.user.apps.filter((app) => app.status === 'Complete');
    const appsRejectedAlt = props.user.apps.filter((app) => app.status === 'Rejected');

    setFavRender(appsFavorited);
    setInProgressRender(appsInProgressAlt);
    setCompletedRender(appsCompletedAlt);
    setRejectedRender(appsRejectedAlt);
  };

  /* Below we handle the filtering of different apps 
     to be passed down to AppsContainer */
  const handleAppsFilter = (status) => {
    resetAppArrays();
    // status "Reset" was implemented to reset app filters upon clicking edit
    if (status === 'Reset') {
      setInProgressClicked(false);
      setCompletedClicked(false);
      setRejectedClicked(false);
      setFavFilterClicked(false);

      setFilteredAppsRender(props.user.apps);
    }

    // This is where we will toggle the button (true or false) to determine which filtered apps are rendered //
    if (status === 'In Progress' && inProgressClicked === false) {
      setInProgressClicked(true);
      setCompletedClicked(false);
      setRejectedClicked(false);
      setFavFilterClicked(false);

      setFilteredAppsRender(inProgressRender);
    } else if (status === 'In Progress' && inProgressClicked === true) {
      setInProgressClicked(false);
      setFilteredAppsRender(props.user.apps);
    }

    if (status === 'Completed' && completedClicked === false) {
      setInProgressClicked(false);
      setRejectedClicked(false);
      setCompletedClicked(true);
      setFavFilterClicked(false);

      setFilteredAppsRender(completedRender);
    } else if (status === 'Completed' && completedClicked === true) {
      setCompletedClicked(false);
      setFilteredAppsRender(props.user.apps);
    }

    if (status === 'Rejected' && rejectedClicked === false) {
      setInProgressClicked(false);
      setCompletedClicked(false);
      setRejectedClicked(true);
      setFavFilterClicked(false);

      // ** need to repopulate the rejectedRender array
      setFilteredAppsRender(rejectedRender);
    } else if (status === 'Rejected' && rejectedClicked === true) {
      setRejectedClicked(false);
      setFilteredAppsRender(props.user.apps);
    }

    // this is where favorites are rendered
    if (status === 'Favorites' && favFilterClicked === false) {
      setInProgressClicked(false);
      setCompletedClicked(false);
      setRejectedClicked(false);
      setFavFilterClicked(true);

      setFilteredAppsRender(favRender);
    } else if (status === 'Favorites' && favFilterClicked === true) {
      setFavFilterClicked(false);
      setFilteredAppsRender(props.user.apps);
    }
  };

  /* This is where we are setting the different counts of applications */

  // This is the initial dashboard render with their counts - we set a flag to true so that it goes into
  // another conditional below if any applications have been added (checks against the length)
  if (props.user.apps && !flag) {
    setYourAppsCount(props.user.apps.length);
    setFilteredAppsRender(props.user.apps);

    const appsInProgress = props.user.apps.filter((app) => app.status === 'In Progress');
    setInProgressCount(appsInProgress.length);
    setInProgressRender(appsInProgress);

    const appsCompleted = props.user.apps.filter((app) => app.status === 'Complete');
    setCompletedCount(appsCompleted.length);
    setCompletedRender(appsCompleted);

    const appsRejected = props.user.apps.filter((app) => app.status === 'Rejected');
    setRejectedCount(appsRejected.length);
    setRejectedRender(appsRejected);

    const appsFavorited = props.user.apps.filter((app) => app.favorite === true);
    setFavCount(appsFavorited.length);
    setFavRender(appsFavorited);

    setFlag(true);
  }

  // If apps have been added or changed since original render, we will enter this conditional
  if (props.user.apps && flag) {
    if (props.user.apps.length !== yourAppsCount) {
      setYourAppsCount(props.user.apps.length);
      resetAppArrays();
    }

    const appsInProgress = props.user.apps.filter((app) => app.status === 'In Progress');
    if (appsInProgress.length !== inProgressCount) {
      setInProgressCount(appsInProgress.length);
      resetAppArrays();
    }

    const appsCompleted = props.user.apps.filter((app) => app.status === 'Complete');
    if (appsCompleted.length !== completedCount) {
      setCompletedCount(appsCompleted.length);
      resetAppArrays();
    }

    const appsRejected = props.user.apps.filter((app) => app.status === 'Rejected');
    if (appsRejected.length !== rejectedCount) {
      setRejectedCount(appsRejected.length);
      resetAppArrays();
    }

    /* Below is to fix the status of an app if it is in the favorites and has been changed */

    const appsFavorited = props.user.apps.filter((app) => app.favorite === true);
    const appsInProgressAlt = props.user.apps.filter((app) => app.status === 'In Progress');
    const appsCompletedAlt = props.user.apps.filter((app) => app.status === 'Complete');
    const appsRejectedAlt = props.user.apps.filter((app) => app.status === 'Rejected');

    if (appsFavorited.length !== favCount) {
      setFilteredAppsRender(props.user.apps);
      resetAppArrays();
      setFavCount(appsFavorited.length);
      setFavFilterClicked(true); // not sure why this needs to be here, but it does (come back to this)

      // this is how we rerender the proper status for each job app under favorites
    } else if (appsInProgressAlt.length !== inProgressCount) {
      setInProgressCount(appsInProgressAlt.length);
      resetAppArrays();
    } else if (appsCompletedAlt.length !== completedCount) {
      setCompletedCount(appsCompletedAlt.length);
      resetAppArrays();
    } else if (appsRejectedAlt.length !== rejectedCount) {
      setRejectedCount(appsRejectedAlt.length);
      resetAppArrays();
    }
  }

  return (
    <div className="dash-container">
      <NavHeader />

      <div className="dash-main">
        <Header
          name={props.user.firstName}
          history={props.history}
          user={props.user}
          handleUserData={props.handleUserData}
          handleAppId={props.handleAppId}
          appId={props.appId}
          handleClick={handleClick}
          modal={modal}
          toggle={toggle}
        />
        <AppsContainer
          handleAppId={props.handleAppId}
          handleUserData={props.handleUserData}
          user={props.user}
          yourAppsCount={yourAppsCount}
          inProgressCount={inProgressCount}
          completedCount={completedCount}
          rejectedCount={rejectedCount}
          favCount={favCount}
          handleAppsFilter={handleAppsFilter}
          filteredAppsRender={filteredAppsRender}
          resetAppArrays={resetAppArrays}
          handleClick={handleClick}
          modal={modal}
          toggle={toggle}
        />
      </div>
      <div className="dash-footer" />
    </div>
  );
};

export default DashboardContainer;
