import React, { useState } from 'react';
import {
  Label,
  Button,
  Collapse,
  NavbarToggler,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Navigation = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      {/* in <Navbar/> color = 'faded' light is what displayes the hamburger*/}
      <Navbar color='faded' light>
        <NavbarBrand>
          <i className='fas fa-cookie-bite'>My Fortune Cookie Fortune</i>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className='mr-2' />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href='/components/'>To Be Determined</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/reactstrap/reactstrap'>
                GitHub - test link
              </NavLink>
            </NavItem>
            <NavItem>
              {props.logoutDisplay() && (
                <Button onClick={props.clickLogout}>
                  <i className='fas fa-door-open'></i>
                </Button>
              )}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
