import React from 'react';
import { Col, Row, Button, Label, Input } from 'reactstrap';

const JobApp = (props) => {
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
            {props.startedOn}
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
            {props.lastUpdated}
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
