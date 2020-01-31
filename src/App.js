import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layout/Navbar';
import Auth from './components/auth/Auth';
// import Fortune from './components/myfortunes/SaveMyFortune';
import FortunesIndex from './components/myfortunes/FortunesIndex';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'; // ROUTER madness!!!!!!!!!!!!

function App() {
  const [sessionToken, setSessionToken] = useState('');

  const [toggleSignup, setToggleSignup] = useState(false);

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
    return sessionToken === localStorage.getItem('token') ? (
      
          // <Route exact path= '/fortunes' component={FortunesIndex}>

          <FortunesIndex token={sessionToken} />


          // </Route>
      
    ) : (
     
          // <Route exact path= '/sigin' component={updateToken}>

          <Auth updateToken={updateToken} toggleSignup={toggleSignup} />


          // </Route>
     
    );
  };

  return (
    <div className='App bg'>
      
      

      <Navbar
        clickLogout={clearToken}
        logoutDisplay={logoutDisplay}
        toggleSignup={toggleSignup}
        loginORSignup={loginORSignup}
      />
      {/* <Router> */}
      {/* <Auth updateToken={updateToken} /> */}
      {protectedViews()}
      {/* </Router> */}
    </div>
  );
}

export default App;
