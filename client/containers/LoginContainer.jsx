import React from 'react';
import Login from '../components/Login';

const LoginContainer = (props) => {
  return (
    <div className="login-main">
      <Login handleUserData={props.handleUserData} user={props.user} />
    </div>
  );
};

export default LoginContainer;
