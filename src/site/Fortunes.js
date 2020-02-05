import React, { useState } from 'react';
import './Fortunes.css';
import Sound from 'react-sound';
import soundfile from '../assets/intro.mp3';
import { hat } from '../assets/array';

const Fortunes = () => {
  const [text, settext] = useState('');

  const resetTrans = () => {
    document.getElementById('suess').className = '';
  };

  const alterText = () => {
    settext(hat[0]);
    let dr;
    let num = hat.length;
    let rand = Math.random();
    rand = Math.floor(rand * num);
    console.log('Random: ', rand);
    settext(hat[rand]);
    document.getElementById('suess').className = 'fourth';
  };

  return (
    <div className='fpage-bg justify-content-center m-0'>
      <div className='animation-box m-auto justigy-content-center'>
        <div className='fifth-text about-text  transparent-bg justigy-content-center m-auto p-1'>
          <h3 className='p-1'>Why Leave your Future up to chance?</h3>
          <p className='p-1'>
            Never leave your fortunes behind! We take your future very
            seriously. Each fortune you receive below was cast just for you. Our
            code Psyhics are gifted specifically in identifying your computer so
            you can be certain of an accurate reading. We like to think
            technology removes us from the supernatural. That couldn't be
            further from the truth. So rest assured YOUR FUTURE is in our hands.
          </p>
          <button
            onClick={() => {
              alterText();
            }}
          >
            Cast my Reading!<sup>*</sup>
          </button>

        </div>
        <div
          id='suess'
          className='transparent-bg'
          style={{
            color: 'white',
            fontSize: '1.2em',
            textShadow: '3px 3px 5px #252525'
          }}
        >
          {text}
        </div>
      </div>
      <Sound url={soundfile} playStatus={Sound.status.PLAYING} />
      <div className='dis'>* All fortunes are quotes from Dr. Suess.</div>
    </div>
  );
};

export default Fortunes;
