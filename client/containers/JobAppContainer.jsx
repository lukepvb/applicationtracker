import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import JobApp from '../components/JobApp';
import { useHistory } from 'react-router-dom';
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa';

const JobAppContainer = (props) => {
  const [isOpen, setIsOpen] = useState(props.isOpen);

  const toggle = () => setIsOpen(!isOpen);

  let history = useHistory();

  const handleEdit = () => {
    toggle();
    props.handleAppId(props.appId);
    console.log(props.appId);
    history.push('/dashboard/updateApp');
  };

  async function handleDelete(event) {
    toggle();
    props.handleAppId(props.appId);
    console.log(props.appId);
    // fetch request to delete app from user doc in db
    event.preventDefault();

    const deleteData = { userId: props.user._id, appId: props.appId };

    // control flow sets url to update rather than create if updating existing apps
    const appURL = '/api/apps/delete/';

    await fetch(appURL, {
      method: 'delete',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(deleteData)
    })
      .then((res) => res.json())
      .then((data) => props.handleUserData(data))
      .catch((err) => console.log(err));

    /* take the current user object, isolate apps array, iterate over
        checking for a match based on props.appId, update it in user object,
        handleUserData(props.user)
        */
    // for (let i = 0; i < props.user.apps.length; i += 1) {
    //   let curApp = props.user.apps[i];
    //   console.log('inside of for loop before handleUserData', curApp);
    //   if (curApp._id == props.appId) {
    //     props.user.apps[i] = newAppData;
    //     props.user.apps[i]._id = appId;
    //     props.handleUserData(props.user);
    //     break;
    //   }
    // }

    // handle user data with updated user doc
    history.push('/dashboard');
  }

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
            <Button onClick={handleEdit}>
              <FaEdit className="icon-edit" /> Edit
            </Button>
            <Button
              color="danger"
              onClick={(e) => {
                handleDelete(e);
              }}
            >
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
