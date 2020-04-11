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
import { IoMdStats } from 'react-icons/io';
import {
  FaUserEdit,
  FaUserLock,
  FaUserCheck,
  FaLock,
  FaUserCircle,
  FaEdit,
  FaRegBuilding,
  FaListOl,
} from 'react-icons/fa';
import { TiLocationOutline } from 'react-icons/ti';
import { GiReceiveMoney } from 'react-icons/gi';
import { MdSave, MdList, MdDateRange, MdSpeakerNotes } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

const NewApp = (props) => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(true);

  let history = useHistory();

  const toggle = () => setModal(!modal);

  const handleClick = () => {
    toggle();
    history.push('/dashboard');
  };

  // **** TO DO - Make sure to account for handleSubmit and handleClick ***** //

  const closeBtn = (
    <Button className="close" onClick={handleClick}>
      &times;
    </Button>
  );

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          <MdList className="icon-application" />
          Application
        </ModalHeader>
        <ModalBody>
          <Form className="form-new-app">
            <Row>
              <Col>
                <Label for="company">
                  <FaRegBuilding className="icon-company" />
                  Company:
                </Label>
                <Input type="text" name="company" className="company">
                  {props.companyName}
                </Input>
              </Col>
              <Col>
                <Label for="role">
                  <FaUserCircle className="icon-username" />
                  Role:
                </Label>
                <Input type="text" name="role" className="role">
                  {props.companyRole}
                </Input>
              </Col>
              <Col>
                <Label for="started">
                  <MdDateRange className="icon-date" />
                  Started On:
                </Label>
                <Input type="date" name="started" className="started">
                  {props.startedOn}
                </Input>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Label for="location">
                  <TiLocationOutline className="icon-location" />
                  Location:
                </Label>
                <Input type="text" name="location" className="location">
                  {props.companyLocation}
                </Input>
              </Col>
              <Col>
                <Label for="salary">
                  <GiReceiveMoney className="icon-salary" />
                  Salary:
                </Label>
                <Input type="select" name="salary" className="salary">
                  <option></option>
                  <option>Under 80k</option>
                  <option>80k-90k</option>
                  <option>90k-100k</option>
                  <option>100k-110k</option>
                  <option>110k-120k</option>
                  <option>120k-130k</option>
                  <option>130k-140k</option>
                  <option>Over 140k</option>
                </Input>
              </Col>
              <Col>
                <Label for="last-updated">
                  {' '}
                  <MdDateRange className="icon-date" />
                  Last Updated:
                </Label>
                <Input type="date" name="last-updated" className="last-updated">
                  {props.lastUpdated}
                </Input>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Label for="status">
                  <IoMdStats className="icon-status" />
                  Status:
                </Label>
                <Input type="select" name="status" className="status">
                  <option>In Progress</option>
                  <option>Complete</option>
                  <option>Rejected</option>
                </Input>
              </Col>
              <Col>
                <Label for="status">
                  <FaListOl className="icon-stage" />
                  Stage:
                </Label>
                <Input type="select" name="status" className="status">
                  <option>Research</option>
                  <option>App Submitted</option>
                  <option>Follow-up</option>
                  <option>Phone Screen</option>
                  <option>Take Home/Technical</option>
                  <option>On-site</option>
                  <option>Offer-pending</option>
                  <option>Rejected</option>
                </Input>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Label for="notes">
                  <MdSpeakerNotes className="icon-notes" />
                  Notes:
                </Label>
                <Input type="textarea" name="notes" className="notes">
                  {props.companyNotes}
                </Input>
              </Col>
            </Row>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleClick}>
            Save <MdSave className="icon-save" />
          </Button>{' '}
          <Button color="secondary" onClick={handleClick}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default NewApp;
