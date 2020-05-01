import React, { useState } from 'react';
import { Col, Row, Button, Label, Input } from 'reactstrap';

const JobApp = (props) => {
  // format date
  const [startedOn, setStartedOn] = useState(props.startedOn);
  const [lastUpdate, setLastUpdate] = useState(props.lastUpdate);
  const [startFormat, setStartFormat] = useState(false);
  const [updateFormat, setUpdateFormat] = useState(false);

  console.log(props);

  const dateFormat = (dateRaw, str) => {
    // for (let i = 0; i <= 1; i += 1) {
    console.log(dateRaw);
    if (dateRaw) {
      const justDate = dateRaw.split('T')[0];
      const splitDate = justDate.split('-');
      const year = splitDate.shift();
      splitDate.push(year);
      const formattedDate = splitDate.join('-');
      console.log(formattedDate);
      if (str === 'start') {
        setStartedOn(formattedDate);
        setStartFormat(true);
      } else {
        setLastUpdate(formattedDate);
        setUpdateFormat(true);
      }
    }
  };

  if (!startFormat) {
    dateFormat(startedOn, 'start');
  }

  if (!updateFormat) {
    dateFormat(lastUpdate, 'update');
  }

  return (
    <div className="app-fields">
      <Row>
        <Col>
          <Label for="company">Company:</Label>
          <p name="company" className="company">
            {props.companyName}
          </p>
        </Col>
        <Col>
          <Label for="role">Role:</Label>
          <p name="role" className="role">
            {props.companyRole}
          </p>
        </Col>
        <Col>
          <Label for="started">Started On:</Label>
          <p name="started" className="started">
            {startedOn}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Label for="location">Location:</Label>
          <p name="location" className="location">
            {props.companyLocation}
          </p>
        </Col>
        <Col>
          <Label for="salary">Salary:</Label>
          <p name="salary" className="salary">
            {props.companySalary}
          </p>
        </Col>
        <Col>
          <Label for="last-updated">Last Updated:</Label>
          <p name="last-updated" className="last-updated">
            {lastUpdate}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Label for="status">Status:</Label>
          <p name="status" className="status">
            {props.companyStatus}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Label for="notes">Notes:</Label>
          <p name="notes" className="notes">
            {props.companyNotes}
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default JobApp;
