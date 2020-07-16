import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import JobApp from '../components/JobApp';
import { useHistory } from 'react-router-dom';
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa';

const JobAppContainer = (props) => {
  const [isOpen, setIsOpen] = useState(props.isOpen);
  const [startedOn, setStartedOn] = useState(props.startedOn);
  const [lastUpdate, setLastUpdate] = useState(props.lastUpdate);
  const [startFormat, setStartFormat] = useState(false);
  const [updateFormat, setUpdateFormat] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  let history = useHistory();

  const handleClick = () => {
    toggle();
    props.handleAppId(props.appId);
    console.log(props.appId);
    history.push('/dashboard/updateApp');
  };

  // TO-DO: destructure props and place in CardBody fields

  const dateFormat = (dateRaw, str) => {
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
    <div className="job-app-container">
      <Button color="primary" size="lg" onClick={toggle} block>
        {props.companyName}
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            <JobApp
              companyName={props.companyName}
              companyRole={props.companyRole}
              startedOn={props.startedOn}
              companyLocation={props.companyLocation}
              companySalary={props.companySalary}
              lastUpdate={props.lastUpdate}
              companyStatus={props.companyStatus}
              companyUrl={props.companyUrl}
              companyContact={props.companyContact}
              companyNotes={props.companyNotes}
              appId={props.appId}
            />
            <Button onClick={handleClick}>
              <FaEdit className="icon-edit" /> Edit
            </Button>
            <Button color="danger">
              <FaRegTrashAlt className="icon-trash" />
              Delete
            </Button>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default JobAppContainer;
