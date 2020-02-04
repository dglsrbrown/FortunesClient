import React, { useState, useEffect } from 'react';
import './Fortunes.css';

const Fortunes = () => {
  const [buttonStatus, setbuttonStatus] = useState(false);
  const [text, setText] = useState('');
  let displaytext;
  const quotes = ['You are the best', 'No you are!'];

 

  return (
    <div className='fpage-bg justify-content-center m-0'>
      <div className='animation-box m-auto justigy-content-center'>
        <div className="fifth-text about-text  transparent-bg justigy-content-center m-auto">
          <h3>You Become What you Imagine</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In rerum eius doloribus adipisci nihil consequatur necessitatibus laborum sequi animi dignissimos veritatis iusto architecto, vel dicta beatae delectus facilis ut tenetur, nostrum sapiente, hic minima placeat. Saepe modi quidem illo sapiente?</p>
          
        </div>
      </div>
     
    </div>
  );
};

export default Fortunes;
