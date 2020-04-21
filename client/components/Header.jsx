import React from 'react';
import { useHistory } from 'react-router-dom';
import { Jumbotron, Button, Input } from 'reactstrap';
import { MdAddCircle } from 'react-icons/md';
import { TiArrowForwardOutline } from 'react-icons/ti';
import Avatar from 'react-avatar';

const Header = (props) => {
  let history = useHistory();

  const handleClick = () => {
    history.push('/dashboard/newApp');
  };
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">
          <Avatar className="avatar" size={160} round />
          Hello, {props.name}!
        </h1>
        <p className="lead">
          This simple app is intended to help add structure to your application process -
        </p>
        <hr className="my-2" />
        <h4>
          Click the icon below to get started!{' '}
          <TiArrowForwardOutline className="jumbo-arrow" size={130} />
        </h4>
        <p className="lead">
          <Button outline className="button-new-app" color="success" onClick={handleClick}>
            <MdAddCircle size={60} />
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Header;
