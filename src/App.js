import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layout/Navbar';
import Auth from './components/auth/Auth';
// import Fortune from './components/myfortunes/SaveMyFortune';
import FortunesIndex from './components/myfortunes/FortunesIndex';

function App() {
  const [sessionToken, setSessionToken] = useState('');

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
      <FortunesIndex token={sessionToken} />
    ) : (
      <Auth updateToken={updateToken} />
    );
  };

  return (
    <div className='App'>
      <Navbar clickLogout={clearToken} logoutDisplay={logoutDisplay} />
      {/* <Auth updateToken={updateToken} /> */}
      {protectedViews()}
    </div>
  );
}

export default App;
