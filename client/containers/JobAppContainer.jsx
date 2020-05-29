import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import JobApp from '../components/JobApp';
import { useHistory } from 'react-router-dom';
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa';

const JobAppContainer = (props) => {
  const [isOpen, setIsOpen] = useState(props.isOpen);

  const toggle = () => setIsOpen(!isOpen);

  let history = useHistory();

  const handleClick = () => {
    toggle();
    props.handleAppId(props.appId);
    console.log(props.appId);
    history.push('/dashboard/updateApp');
  };

  // TO-DO: destructure props and place in CardBody fields

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
