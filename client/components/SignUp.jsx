import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useHistory } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label,
  Col,
  Row,
} from 'reactstrap';
import { FaUserEdit, FaUserLock, FaUserCheck, FaLock, FaUserCircle, FaEdit } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

const SignUp = (props) => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  const [userFirstName, setFirstName] = useState('');
  const [userLastName, setLastName] = useState('');
  const [userEmail, setEmail] = useState('');
  const [usernameInput, setUsername] = useState('');
  const [userPassword, setPassword] = useState('');
  const [userConfirmPassword, setConfirmPassword] = useState('');
  const [validateEmail, setEmailValidation] = useState();

  const toggle = () => setModal(!modal);

  const closeBtn = (
    <Button className="close" onClick={toggle}>
      &times;
    </Button>
  );

  const handleClick = () => {
    props.history.push('/dashboard');
  };

  async function handleSignUpSubmit() {
    const data = {
      firstName: userFirstName,
      lastName: userLastName,
      email: userEmail,
      username: usernameInput,
      password: userPassword,
    };

    fetch('/api/users/create/', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // nav to dashboard after signup
    handleClick();
  }

  const handleKeyPress = (target) => {
    if (target.key === 'Enter') {
      handleSignUpSubmit();
    }
  };

  function validateUserEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let validate;
    if (emailRex.test(e.target.value) && e.target.value !== '') {
      validate = true;
    } else if (e.target.value !== '') {
      validate = false;
    }
    setEmailValidation(validate);
  }

  return (
    <div>
      Don't have an account?
      <button type="button" className="sign-up" onClick={toggle}>
        Sign up
      </button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          <FaEdit className="icon-signup" /> Sign Up
        </ModalHeader>
        <ModalBody>
          <Form className="sign-up-form">
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="firstName">
                    <FaEdit className="icon-pencil" />
                    First Name
                  </Label>
                  <Input
                    type="text"
                    name="firstName"
                    id="first-name"
                    placeholder="ex. Jane/John"
                    value={userFirstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="lastName">
                    <FaEdit className="icon-pencil" />
                    Last Name
                  </Label>
                  <Input
                    type="text"
                    name="lastName"
                    id="last-name"
                    placeholder="Doe"
                    value={userLastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="email">
                    <MdMail id="icon-signup-email" />
                    Email
                  </Label>
                  <Input
                    valid={validateEmail}
                    invalid={!validateEmail}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="ex. needsjob@gmail.com"
                    value={userEmail}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      validateUserEmail(e);
                    }}
                  />
                  <FormFeedback valid>That's a tasty looking email you've got there.</FormFeedback>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="username">
                    <FaUserCircle className="icon-username" />
                    Username
                  </Label>
                  <Input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="ex. janeDoe2"
                    autoComplete="username"
                    value={usernameInput}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="password">
                    {' '}
                    <FaLock className="icon-password" id="icon-signup-password" />
                    Password
                  </Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="********"
                    autoComplete="new-password"
                    value={userPassword}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup className="password-confirm">
                  <Label for="password-confirm">
                    {' '}
                    <FaUserLock className="icon-user-lock" />
                    Confirm Password
                  </Label>
                  <Input
                    type="password"
                    name="password-confirm"
                    id="password-confirm"
                    placeholder="********"
                    autoComplete="new-password"
                    value={userConfirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup className="terms-and-conditions" check>
              <Label check>
                <Input type="checkbox" id="terms" /> I agree to Terms and Conditions
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit" onClick={handleSignUpSubmit}>
            Sign Up <FaUserCheck className="icon-signup-submit" />
          </Button>{' '}
          <Button color="secondary" type="button" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default SignUp;
