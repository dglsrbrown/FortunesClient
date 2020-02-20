import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Account from '../App';
import Fortunes from '../site/Fortunes';
import About from '../site/About';
import Home from '../site/Home';
import './Header.css';

const Header = () => {
  return (
    <div>
      <div className='nav-main flex-box'>
        <div className=''>
          <h4 className='mr-0'>My Fortune Cookie Fortune</h4>
        </div>
        <div className=' flex-box header-right'>
          <div className="m-0 p-0">
          <Link className='link' to='/'>
            Home
          </Link>
          <Link className='link' to='/account'>
            Account
          </Link>
          </div>
          <div className=' m-0 p-0'>
          <Link className='link' to='/fortunes'>
            Your Future
          </Link>

          <Link className='link' to='/about'>
            About
          </Link>
          </div>
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
