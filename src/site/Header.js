import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from '../App';
import Fortunes from '../site/Fortunes';
import About from '../site/About';
import './Header.css';

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Header = () => {
  return (
    <div className='header '>
      <div className='nav-main'>
        {/* <ul className='sidebar-list list-unstyled'>
          <li> */}
        <Link className='link' to='/'>
          Home
        </Link>
        {/* </li>
          <li> */}
        <Link className='link' to='/fortunes'>
          Fortunest
        </Link>
        {/* </li>
          <li> */}
        <Link className='link' to='/about'>
          About
        </Link>
        {/* </li>
        </ul> */}
      </div>
      <div className='sidebar-route'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/fortunes'>
            <Fortunes />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Header;
