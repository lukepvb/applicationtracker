import React, { useState } from 'react';
import { Col, Row, Button, Label, Input } from 'reactstrap';
import { FaExternalLinkAlt, FaUserAlt, FaRegBuilding, FaListOl } from 'react-icons/fa';
import { MdSave, MdList, MdDateRange, MdSpeakerNotes, MdComputer } from 'react-icons/md';
import { TiLocationOutline } from 'react-icons/ti';
import { GiReceiveMoney } from 'react-icons/gi';
import { IoMdStats } from 'react-icons/io';

const JobApp = (props) => {
  const handleDate = (date) => {
    const splitDate = date.split('T')[0].split('-');
    const year = splitDate.shift();
    splitDate.push(year);
    const formattedDate = splitDate.join('-');
    return formattedDate;
  };

  /* Format href properly to account for http:// so it will send to external source  
  - or instruct someone to use a specific format when they are entering the info - let's talk about this one */
  const href = `http://${props.companyUrl}`;

  return (
    <div className="app-fields">
      <Row>
        <Col>
          <span>
            <FaRegBuilding className="icon-newApp" />
            <Label for="company">Company:</Label>
            <p name="company" className="company">
              {props.companyName}
            </p>
          </span>
        </Col>
        <Col>
          <MdComputer className="icon-newApp" />
          <Label for="role">Role:</Label>
          <p name="role" className="role">
            {props.companyRole}
          </p>
        </Col>
        <Col>
          <TiLocationOutline className="icon-newApp" />
          <Label for="location">Location:</Label>
          <p name="location" className="location">
            {props.companyLocation}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <MdDateRange className="icon-newApp" />
          <Label for="started">Started On:</Label>
          <p name="started" className="started">
            {handleDate(props.startedOn)}
          </p>
        </Col>
        <Col>
          <IoMdStats className="icon-newApp" />
          <Label for="status">Status:</Label>
          <p name="status" className="status">
            {props.companyStatus}
          </p>
        </Col>
        <Col>
          <MdDateRange className="icon-newApp" />
          <Label for="last-updated">Last Updated:</Label>
          <p name="last-updated" className="last-updated">
            {handleDate(props.lastUpdate)}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Label>
            <FaUserAlt className="icon-newApp" />
            Primary Contact:
          </Label>
          <p name="primary-contact" className="primary-contact">
            {props.companyContact}
          </p>
        </Col>
        <Col>
          <Label for="url">
            <FaExternalLinkAlt className="icon-newApp" />
            URL:
          </Label>
          <br />
          <a href={href} target="_blank" name="url" className="url">
            {href}
          </a>
        </Col>
        <Col>
          <GiReceiveMoney className="icon-newApp" />
          <Label for="salary">Salary:</Label>
          <p name="salary" className="salary">
            {props.companySalary}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <MdSpeakerNotes className="icon-newApp" />
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
