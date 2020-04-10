import React, { useState } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import JobAppContainer from './JobAppContainer';

const AppsContainer = (props) => {
  const [isOpen, setCard] = useState(false);

  const toggle = () => setCard(!isOpen);

  // TO-DO: Render ListGroupItems based on array of props.apps

  return (
    <div className="apps-container">
      <h1>Your Applications</h1>
      <div className="apps-list-group">
        <ListGroup>
          <ListGroupItem tag="button" onClick={toggle}>
            <JobAppContainer
              isOpen={isOpen}
              companyName="Snapchat"
              companyRole="Frontend Software Engineer"
              startedOn="April 4th, 2020"
              companyLocation="Venice, CA"
              companySalary="$150K"
              lastUpdated="April 7th, 2020"
              companyStatus="In Progress"
              companyNotes="I did some research and this is all the shit that I thought would be good to remember and shit. Man I really need a job. Did I establish credibility? I hope so. That would be sicc to work at Snapchat."
            />
          </ListGroupItem>{' '}
          <ListGroupItem tag="button" onClick={toggle}>
            <JobAppContainer isOpen={isOpen} companyName="Trello" />
          </ListGroupItem>{' '}
          <ListGroupItem tag="button" onClick={toggle}>
            <JobAppContainer isOpen={isOpen} companyName="Dollar Shave Club" />
          </ListGroupItem>{' '}
          <ListGroupItem tag="button" onClick={toggle}>
            <JobAppContainer isOpen={isOpen} companyName="Facebook" />
          </ListGroupItem>
          <ListGroupItem tag="button" onClick={toggle}>
            <JobAppContainer isOpen={isOpen} companyName="Google" />
          </ListGroupItem>{' '}
        </ListGroup>
      </div>
    </div>
  );
};

export default AppsContainer;
