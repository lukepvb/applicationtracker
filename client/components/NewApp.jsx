import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Input,
  Label,
  Col,
  Row,
} from 'reactstrap';
import { IoMdStats } from 'react-icons/io';
import { FaExternalLinkAlt, FaUserAlt, FaEdit, FaRegBuilding, FaListOl } from 'react-icons/fa';
import { TiLocationOutline } from 'react-icons/ti';
import { GiReceiveMoney } from 'react-icons/gi';
import { MdSave, MdList, MdDateRange, MdSpeakerNotes, MdComputer } from 'react-icons/md';

const NewApp = (props) => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(true);
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [startedOn, setStartedOn] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState(0);
  const [lastUpdate, setLastUpdate] = useState('');
  const [status, setStatus] = useState('In Progress');
  const [stage, setStage] = useState('Research');
  const [contact, setContact] = useState('');
  const [url, setUrl] = useState('');
  const [notes, setNotes] = useState('');

  const toggle = () => setModal(!modal);

  const handleClick = () => {
    toggle();
    props.history.push('/dashboard');
  };

  // formatting for suggesting current date
  const curDate = new Date();
  const nowYear = curDate.getFullYear();
  // .getMonth starts at 0th index, so add 1 before evaluating format
  let nowMonth = curDate.getMonth() + 1;
  // format does not default to double digit integer
  if (nowMonth < 10) {
    nowMonth = `0${nowMonth}`;
  }
  const nowDate = curDate.getDate();
  // storing formatted date in a variable for use in startedOn/lastUpdate
  const formattedDate = `${nowYear}-${nowMonth}-${nowDate}`;
  // control flow for start date formatting - only updates when empty
  if (startedOn === '') {
    setStartedOn(formattedDate);
  }
  // control flow for lastUpdate formatting - same as above
  if (lastUpdate === '') {
    setLastUpdate(formattedDate);
  }

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
          <MdList className="icon-newApp" />
          Application
        </ModalHeader>
        <ModalBody>
          <Form className="form-new-app">
            <Row>
              <Col>
                <Label for="company">
                  <span>
                    <FaRegBuilding className="icon-newApp" />
                    Company:
                  </span>
                </Label>
                <Input
                  type="text"
                  name="company"
                  className="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </Col>
              <Col>
                <Label for="role">
                  <MdComputer className="icon-newApp" />
                  Role:
                </Label>
                <Input
                  type="text"
                  name="role"
                  className="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </Col>
              <Col>
                <Label for="started">
                  <MdDateRange className="icon-newApp" />
                  Started On:
                </Label>
                <Input
                  type="date"
                  name="started"
                  className="started"
                  value={startedOn}
                  onChange={(e) => setStartedOn(e.target.value)}
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Label for="location">
                  <TiLocationOutline className="icon-newApp" />
                  Location:
                </Label>
                <Input
                  type="text"
                  name="location"
                  className="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </Col>
              <Col>
                <Label for="salary">
                  <GiReceiveMoney className="icon-newApp" />
                  Salary:
                </Label>
                <Input
                  type="select"
                  name="salary"
                  className="salary"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                >
                  <option>Select Range</option>
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
                  <MdDateRange className="icon-newApp" />
                  Last Updated:
                </Label>
                <Input
                  type="date"
                  name="last-updated"
                  className="last-updated"
                  value={lastUpdate}
                  onChange={(e) => setLastUpdate(e.target.value)}
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Label for="status">
                  <IoMdStats className="icon-newApp" />
                  Status:
                </Label>
                <Input
                  type="select"
                  name="status"
                  className="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option>In Progress</option>
                  <option>Complete</option>
                  <option>Rejected</option>
                </Input>
              </Col>
              <Col>
                <Label for="status">
                  <FaListOl className="icon-newApp" />
                  Stage:
                </Label>
                <Input
                  type="select"
                  name="status"
                  className="status"
                  value={stage}
                  onChange={(e) => setStage(e.target.value)}
                >
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
                <Label for="url">
                  <FaExternalLinkAlt className="icon-newApp" />
                  URL:
                </Label>
                <Input
                  type="text"
                  name="url"
                  className="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </Col>
              <Col>
                <Label for="contact">
                  <FaUserAlt className="icon-newApp" />
                  Primary Contact:
                </Label>
                <Input
                  type="text"
                  name="contact"
                  className="contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Label for="notes">
                  <MdSpeakerNotes className="icon-newApp" />
                  Notes:
                </Label>
                <Input
                  type="textarea"
                  name="notes"
                  className="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
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
