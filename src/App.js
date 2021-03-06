import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layout/Navbar';
import Auth from './components/auth/Auth';
// import Fortune from './components/myfortunes/SaveMyFortune';
import FortunesIndex from './components/myfortunes/FortunesIndex';

import Landing from './components/landing/LandingPage';

function App() {
  const [sessionToken, setSessionToken] = useState('');

  const [toggleSignup, setToggleSignup] = useState(false);
  const [landing, setLanding] = useState(true);

  const toggleLanding = () => {
    setLanding(!landing);
  };

  const loginORSignup = () => {
    console.log('toggleSignup: ', toggleSignup);
    if (toggleSignup == false) {
      setToggleSignup(true);
    } else {
      setToggleSignup(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, []); //empty array has it run only once - find out why

  const updateToken = newToken => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  };

  const logoutDisplay = () => {
    if (sessionToken === localStorage.getItem('token')) {
      console.log('LD true');
      return true;
    } else {
      console.log('LD false');
    }
  };

  const protectedViews = () => {
    if (landing) {
      return <Landing toggleLanding={toggleLanding} />;
    } else {
      return sessionToken === localStorage.getItem('token') ? (
        <FortunesIndex token={sessionToken} />
      ) : (
        <Auth
          updateToken={updateToken}
          toggleSignup={toggleSignup}
          toggleLanding={toggleLanding}
          landing={landing}
        />
      );
    }
  };

  return (
    <div className='App bg'>
      <Navbar
        clickLogout={clearToken}
        logoutDisplay={logoutDisplay}
        toggleSignup={toggleSignup}
        loginORSignup={loginORSignup}
        toggleLanding={toggleLanding}
        landing={landing}
      />

      {protectedViews()}
    </div>
  );
}

export default App;
