import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../assets/styles.css';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';

const App = (props) => {
  return (
    <Router>
      <div className="router">
        <Login />
        <Link to="/signup">Don't have an account? Sign up!</Link>

        <Switch>
          {/* <Route exact path="/" component={Login} /> */}
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
