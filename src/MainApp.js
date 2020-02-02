import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import'./App.css';
import Header from './site/Header'
import Footer from  './site/Footer'
import {
  BrowserRouter as Router,
} from 'react-router-dom';

const MainApp = ()=>   {
  return (
    <div>

      

      <Router>

        <Header />

      </Router>

      <Footer/>

    </div>

  );
}

export default MainApp;
