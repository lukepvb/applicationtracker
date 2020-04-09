import 'bootstrap/dist/css/bootstrap.css';
import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Button, Form } from 'reactstrap';
import '../assets/styles.css';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';

const App = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Router>
      <div className="router">
        <Login />
        <Switch>
          {/* <Route exact path="/" component={Login} /> */}
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
