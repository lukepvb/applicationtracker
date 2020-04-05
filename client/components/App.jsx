import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "../assets/styles.css";

const App = props => {
  return (
    <div className="router">
      <main>
        <Switch>
          Create Login and link to SignUp component from initial page load
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
