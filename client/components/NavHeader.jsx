import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { MdTrackChanges } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

const NavHeader = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  let history = useHistory();

  const handleClickData = () => {
    history.push('/data');
  };

  const handleClickLogout = () => {
    history.push('/');
  };

  return (
    <div className="navbar-container">
      <Navbar color="dark" dark>
        <NavbarBrand href="/" className="mr-auto lg">
          <h5 className="navbar-app-track">
            AppTrack <MdTrackChanges className="icon-tracker" />
          </h5>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            {/* <NavItem>
              <NavLink onClick={handleClickData}>Data</NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink target="_blank" href="https://github.com/lukepvb/applicationtracker">
                GitHub
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={handleClickLogout}>Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavHeader;
