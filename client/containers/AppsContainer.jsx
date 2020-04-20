import React, { useState } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import JobAppContainer from './JobAppContainer';

const AppsContainer = (props) => {
  const [isOpen, setCard] = useState(false);

  const toggle = () => setCard(!isOpen);

  // TO-DO: Render ListGroupItems based on array of props.apps

  // const jobAppsList = [];

  // const userApps = res.locals.user.apps;

  // for (let i = 0; i < userApps.length; i++) {
  //   const curJob = userApps[i];

  //   jobAppsList.push(
  //     <ListGroupItem key={i} tag="button" onClick={toggle}>
  //       <JobAppContainer
  //         isOpen={isOpen}
  //         companyName={curJob.company}
  //         companyRole={curJob.role}
  //         startedOn={curJob.dateSubmitted}
  //         companyLocation={curJob.location}
  //         companySalary={curJob.salary}
  //         companyStatus={curJob.status}
  //         companyNotes={curJob.notes}
  //         dubDown={curJob.dubDown}
  //       />
  //     </ListGroupItem>
  //   );
  // }

  return (
    <div className="apps-container">
      <h1>Your Applications</h1>
      <div className="apps-list-group">{/* <ListGroup>{jobAppsList}</ListGroup> */}</div>
    </div>
  );
};

export default AppsContainer;
