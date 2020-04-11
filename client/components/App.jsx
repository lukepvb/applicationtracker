import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../assets/styles.css';

import Login from './Login.jsx';
import DashboardContainer from '../containers/DashboardContainer';
import NewApp from '../components/NewApp';
import Data from '../components/Data';

const App = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Router>
      <Switch>
        <div className="router">
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={DashboardContainer} />
          <Route path="/dashboard/newApp" component={NewApp} />
          <Route path="/data" component={Data} />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
