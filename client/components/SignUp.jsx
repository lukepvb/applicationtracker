import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
  Col,
  Row,
} from 'reactstrap';

const SignUp = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = (
    <Button className="close" onClick={toggle}>
      &times;
    </Button>
  );

  return (
    <div>
      Don't have an account?
      <button type="button" className="sign-up" onClick={toggle}>
        Sign up
      </button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Sign Up
        </ModalHeader>
        <ModalBody>
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="firstName">First Name</Label>
                  <Input type="text" name="firstName" id="first-name" placeholder="ex. Jane/John" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="lastName">Last Name</Label>
                  <Input type="text" name="lastName" id="last-name" placeholder="Doe" />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="ex. needsjob@gmail.com"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="username">Username</Label>
                  <Input type="text" name="username" id="username" placeholder="ex. janeDoe2" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input type="password" name="password" id="password" placeholder="********" />
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup className="password-confirm">
                  <Label for="password-confirm">Confirm Password</Label>
                  <Input
                    type="password"
                    name="password-confirm"
                    id="password-confirm"
                    placeholder="********"
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="terms" /> I agree to Terms and Conditions
              </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Sign Up
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default SignUp;
