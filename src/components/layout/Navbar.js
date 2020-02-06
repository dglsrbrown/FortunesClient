import React, { useState } from 'react';
import { Button } from 'reactstrap';

const Navigation = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <div className=' flex-end app-controls'>
        <div className=' m-2'>
          {props.landing ? null : props.logoutDisplay() ? ( // <Button className ="button-styles">Info</Button>
            <Button className='button-styles' onClick={props.clickLogout}>
              <i>EXIT</i>
            </Button>
          ) : (
            <Button
              className='button-styles'
              onClick={() => props.loginORSignup()}
            >
              <i>Signup/Login</i>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
