import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../assets/styles.css';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';

const App = (props) => {
  return (
    <div className="router">
      <main>
        {/* <Switch> */}
        <p>Create Login and link to SignUp component from initial page load</p>
        <Login />
        <SignUp />
        {/* <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUp} /> */}
        {/* </Switch> */}
      </main>
    </div>
  );
};

export default App;
