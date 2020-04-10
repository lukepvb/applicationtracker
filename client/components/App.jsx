import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../assets/styles.css';
import Login from './Login.jsx';
import DashboardContainer from '../containers/DashboardContainer';

const App = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Router>
      <Switch>
        <div className="router">
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={DashboardContainer} />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
