import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Account from '../App';
import Fortunes from '../site/Fortunes';
import About from '../site/About';
import Home from '../site/Home';
// import './Header.css';
// import '../assets/logo.png';

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Header = () => {
  return (
    <div>
      <div className='nav-main flex-box'>
        <div className='m-1'>
          {/* <i className='fas fa-cookie-bite ml-2 mr-2'></i>
           */}
          <h4>My Fortune Cookie Fortune</h4>
        </div>
        <div className='m-1'>
          <Link className='link ml-1' to='/'>
            Home
          </Link>
          <Link className='link ml-3' to='/account'>
            Account
          </Link>

          <Link className='link ml-3' to='/fortunes'>
            Your Future
          </Link>

          <Link className='link ml-3 mr-2' to='/about'>
            About
          </Link>
        </div>
      </div>
      <div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/account'>
            <Account />
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
