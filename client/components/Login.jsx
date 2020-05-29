import React, { useState } from 'react';
import { Button, Form, FormText, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { MdMail, MdTrackChanges } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { runtime } from 'regenerator-runtime'; // weird quirk needed while current method of form submission is in place
import SignUp from './SignUp';

const Login = (props) => {
  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');

  const history = useHistory();

  const handleClick = () => {
    history.push('/dashboard');
  };

  async function handleLoginSubmit(event) {
    const postData = { email: userEmail, password: userPassword };
    event.preventDefault();

    fetch('/api/users/login/', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => props.handleUserData(data));

    // invoke handleClick to navigate to dashboard after form submission
    // TODO: Control flow here to avoid moving to dashboard without successful login
    handleClick();
  }

  return (
    <div className="login">
      <MdTrackChanges className="icon-tracker" />
      <Form>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="email" className="mr-sm-2">
            <MdMail className="icon-email" /> Email
          </Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="something@idk.cool"
            value={userEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormText>&nbsp; Input your username or email address</FormText>
        </FormGroup>
        <br />
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="password" className="mr-sm-2">
            <FaLock className="icon-password" /> Password
          </Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            value={userPassword}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormText>
            &nbsp; <a href="/password-reset">Forgot your password?</a>
          </FormText>
        </FormGroup>
        <br />
        <div id="login-button">
          <Button color="primary" type="submit" onClick={handleLoginSubmit}>
            Submit <FiSend className="icon-submit" />
          </Button>
        </div>
      </Form>
      <SignUp history={history} />
    </div>
  );
};

export default Login;
