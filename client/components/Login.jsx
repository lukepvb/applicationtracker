import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import SignUp from './SignUp';
import { MdMail, MdTrackChanges } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let history = useHistory();

  const handleClick = () => {
    history.push('/dashboard');
  };

  const handleEmailChange = (e) => {
    const updatedEmail = e.target.value;
    setEmail(updatedEmail);
  };

  const handlePasswordChange = (e) => {
    const updatedPassword = e.target.value;
    setPassword(updatedPassword);
  };

  return (
    <div className="login-container">
      <MdTrackChanges className="icon-tracker" />
      <Form>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">
            <MdMail className="icon-email" /> Email
          </Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="something@idk.cool"
            value={email}
            onChange={handleEmailChange}
          />
        </FormGroup>
        <br />
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">
            <FaLock className="icon-password" /> Password
          </Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="********"
            value={password}
            onChange={handlePasswordChange}
          />
        </FormGroup>
        <br />
        <div id="login-button">
          <Button color="primary" onClick={handleClick}>
            Submit <FiSend className="icon-submit" />
          </Button>
        </div>
      </Form>
      <SignUp />
    </div>
  );
};

export default Login;
