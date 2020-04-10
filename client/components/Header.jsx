import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { MdLibraryAdd } from 'react-icons/md';

const Header = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello, {props.name}</h1>
        <p className="lead">
          This is a simple hero unit, a simple Jumbotron-style component for calling extra attention
          to featured content or information.
        </p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typography and spacing to space content out within the larger
          container.
        </p>
        <p className="lead">
          <Button color="success">
            <MdLibraryAdd size={25} />
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Header;
