import React, { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import JobAppContainer from './JobAppContainer';

const AppsContainer = (props) => {
  const [isOpen, setCard] = useState(false);
  const [appsRendered, setAppsRendered] = useState(false);

  const toggle = () => setCard(!isOpen);

  const jobAppsList = [];
  // TO-DO: Render ListGroupItems based on array of props.apps

  // console.log(props.user.apps);

  if (props.user.apps) {
    const userApps = props.user.apps;
    console.log('Inside renderApps', props.user);
    for (let i = 0; i < userApps.length; i += 1) {
      const curJob = userApps[i];

      console.log('This is curJob in AppsContainer, line 22', curJob);

      jobAppsList.push(
        <ListGroupItem key={i} tag="button" onClick={toggle}>
          <JobAppContainer
            isOpen={isOpen}
            companyName={curJob.company}
            companyRole={curJob.role}
            startedOn={curJob.dateSubmitted}
            lastUpdate={curJob.lastUpdate}
            companyLocation={curJob.location}
            companySalary={curJob.salary}
            companyStatus={curJob.status}
            companyUrl={curJob.url}
            companyContact={curJob.contact}
            companyNotes={curJob.notes}
            dubDown={curJob.dubDown}
            handleAppId={props.handleAppId}
            appId={curJob._id}
          />
        </ListGroupItem>
      );
    }
  }

  return (
    <div className="apps-container">
      <h1>Your Applications</h1>
      <div className="apps-list-group">
        <ListGroup>{jobAppsList}</ListGroup>
      </div>
    </div>
  );
};

export default AppsContainer;
