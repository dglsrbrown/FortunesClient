import React, { useState } from 'react';
import {
  Label,
  Button,
  Collapse,
  NavbarToggler,
  Navbar,
  NavbarBrand,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
  Popover
} from 'reactstrap';

const Navigation = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      {/* in <Navbar/> color = 'faded' light is what displayes the hamburger*/}
      <Navbar className='app-controls'>
        <NavbarBrand>
          <i className='fas fa-cookie-bite'>My Fortune Cookie Fortune</i>
        </NavbarBrand>
        <Button className ="button-styles" id='PopoverFocus' type='button'>
          Launch Popover
        </Button>
        <UncontrolledPopover
          trigger='hover'
          placement='bottom'
          target='PopoverFocus'
        >
          <PopoverHeader>Focus Trigger</PopoverHeader>
          <PopoverBody>
            Focusing on the trigging element makes this popover appear. Blurring
            (clicking away) makes it disappear. You cannot select this text as
            the popover will disappear when you try.
          </PopoverBody>
        </UncontrolledPopover>

        <NavbarBrand>
          {props.landing ? (
            <Button className ="button-styles">test</Button>
          ) : props.logoutDisplay() ? (
            <Button className ="button-styles" onClick={props.clickLogout}>
              <i className='fas fa-times-circle'></i>
            </Button>
          ) : (
            <Button  className ="button-styles" onClick={() => props.loginORSignup()}>
              <i className='fas fa-user-circle'></i>
            </Button>
          )}
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Navigation;
