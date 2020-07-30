import React, { useState } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import JobAppContainer from './JobAppContainer';

const AppsContainer = (props) => {
  const [isOpen, setCard] = useState(false);
  const toggle = () => setCard(!isOpen);

  const jobAppsList = [];

  // Render ListGroupItems based on array of props.apps
  if (props.user.apps) {
    const userApps = props.filteredAppsRender;
    for (let i = 0; i < userApps.length; i += 1) {
      const curJob = userApps[i];

      jobAppsList.push(
        <ListGroupItem key={curJob._id} tag="button" onClick={toggle}>
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
            user={props.user}
            handleUserData={props.handleUserData}
            isFav={curJob.favorite}
            handleAppsFilter={props.handleAppsFilter}
            resetAppArrays={props.resetAppArrays}
            handleClick={props.handleClick}
            modal={props.modal}
            toggle={props.toggle}
          />
        </ListGroupItem>
      );
    }
  }

  return (
    <div className="apps-container">
      <h1 className="your-apps">{`Your Applications (${props.yourAppsCount})`}</h1>
      <span className="inline-text">
        <h3 className="legend">
          <Button
            name="In Progress"
            onClick={(e) => props.handleAppsFilter(e.target.name)}
            color="warning"
          >
            {`In Progress (${props.inProgressCount})`}{' '}
          </Button>
        </h3>
        <h3 className="legend">
          <Button
            name="Completed"
            onClick={(e) => props.handleAppsFilter(e.target.name)}
            color="success"
          >
            {`Completed (${props.completedCount})`}{' '}
          </Button>
        </h3>
        <h3 className="legend">
          <Button
            name="Rejected"
            onClick={(e) => props.handleAppsFilter(e.target.name)}
            color="danger"
          >
            {`Rejected (${props.rejectedCount})`}{' '}
          </Button>
        </h3>
        <h3 className="legend">
          <Button
            outline
            name="Favorites"
            onClick={(e) => props.handleAppsFilter(e.target.name)}
            color="warning"
          >
            {`Favorites (${props.favCount})`}{' '}
          </Button>
        </h3>
      </span>
      <div className="apps-list-group">
        <ListGroup>{jobAppsList}</ListGroup>
      </div>
    </div>
  );
};

export default AppsContainer;
