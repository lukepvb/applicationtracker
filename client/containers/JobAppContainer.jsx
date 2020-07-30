import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card, Badge } from 'reactstrap';
import JobApp from '../components/JobApp';
import { useHistory } from 'react-router-dom';
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regStar } from '@fortawesome/free-regular-svg-icons';

const JobAppContainer = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fav, setFav] = useState(props.isFav);

  const toggle = () => setIsOpen(!isOpen);

  let history = useHistory();

  const handleEdit = () => {
    toggle();
    props.handleAppId(props.appId);
    props.handleAppsFilter('Reset');
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

    // navigate back to dashboard when complete
    history.push('/dashboard');
  }

  let color;
  // if the company status is equal to 'Complete', set status to primary
  if (props.companyStatus === 'Complete') {
    color = 'success';
    // if value is equal to 'In Progress', set status to warning
  } else if (props.companyStatus === 'In Progress') {
    color = 'warning';
    // if value is equal to 'Rejected', set status to danger
  } else {
    color = 'danger';
  }

  const favToggle = () => {
    console.log('fav before: ', fav);
    setFav(!fav);
    props.resetAppArrays();
  };

  // this is where we are creating favClicked functionality, then running handleUserData
  async function favClicked(app) {
    console.log('This is id from favClicked, line 72 JobAppContainer', app);

    const favoriteData = { userId: props.user._id, appId: props.appId, favStatus: fav };
    console.log('This is the favorite data', favoriteData);

    const appFavURL = '/api/apps/favorite/';

    await fetch(appFavURL, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(favoriteData)
    })
      .then((res) => res.json())
      .then((data) => props.handleUserData(data))
      .catch((err) => console.log(err));

    favToggle();
  }

  // this is where we will create a FavIcon to render depending on whether it is pressed or not
  let FavIcon;
  if (fav)
    FavIcon = (
      <span className="favIcon">
        <FAIcon onClick={() => favClicked()} icon={solidStar} style={{ color: 'steelblue' }} />
      </span>
    );
  else
    FavIcon = (
      <span className="favIcon">
        <FAIcon onClick={() => favClicked()} icon={regStar} />
      </span>
    );

  console.log('fav after: ', fav);
  return (
    <div className="job-app-container">
      <span className="buttonFavCombo">
        <Button color="primary" size="lg" onClick={toggle} block>
          {`${props.companyName}   `}
          <Badge className="app-status" color={color}>
            &nbsp;&nbsp;
          </Badge>
        </Button>
        {FavIcon}
      </span>

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
