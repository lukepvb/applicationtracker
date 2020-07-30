import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../assets/styles.css';
import LoginContainer from '../containers/LoginContainer';
import DashboardContainer from '../containers/DashboardContainer';
import Data from './Data';

const App = (props) => {
  const [user, setUser] = useState({});
  const [appId, setAppId] = useState('');

  const handleUserData = (userData) => {
    setUser(userData);
    console.log('user ID', user);
  };

  const handleAppId = (updateId) => {
    setAppId(updateId);
    console.log('app ID', appId);
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
                appId={appId}
                handleAppId={handleAppId}
                user={user}
              />
            )}
          />
          <Route path="/data" component={Data} />
        </>
      </Switch>
    </Router>
  );
};

export default App;
