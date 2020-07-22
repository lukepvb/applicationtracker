import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../assets/styles.css';
import LoginContainer from '../containers/LoginContainer';
import DashboardContainer from '../containers/DashboardContainer';
import NewApp from './NewApp';
import Data from './Data';

const App = (props) => {
  const [user, setUser] = useState({});
  const [appId, setAppId] = useState('');

  const handleUserData = (userData) => {
    setUser(userData);
    console.log(user);
  };

  const handleAppId = (updateId) => {
    setAppId(updateId);
    console.log(appId);
  };

  return (
    <Router>
      <Switch>
        <>
          <Route
            exact
            path="/"
            render={() => (
              <LoginContainer handleUserData={handleUserData} user={user} className="router" />
            )}
          />
          <Route
            path="/dashboard"
            render={() => (
              <DashboardContainer
                handleUserData={handleUserData}
                handleAppId={handleAppId}
                user={user}
              />
            )}
          />
          <Route
            exact
            path="/dashboard/newApp"
            render={() => <NewApp handleUserData={handleUserData} user={user} />}
          />
          <Route
            exact
            path="/dashboard/updateApp"
            render={() => <NewApp appId={appId} handleUserData={handleUserData} user={user} />}
          />
          <Route path="/data" component={Data} />
        </>
      </Switch>
    </Router>
  );
};

export default App;
