import 'bootstrap/dist/css/bootstrap.css';
import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Button, Form } from 'reactstrap';
import '../assets/styles.css';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import Dashboard from './Dashboard';

const App = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Router>
      <Switch>
        <div className="router">
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
