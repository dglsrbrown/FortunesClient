import React, { useState, useEffect } from 'react';
import './Home.css';
import soundfile from '../assets/intro.mp3';
import Sound from 'react-sound';
const Home = props => {
  const [value, setvalue] = useState('STOPPED');

  return (
    <div className='bg-home row justify-content-center '>
      <div className='trans-bg col-6 text-center mh-100'>
        <h1>Welcome</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          illum quae nobis est aliquid temporibus ea quas, repellendus molestias
          repellat, dolore alias accusamus maiores, ducimus accusantium cum at
          dicta. Eos sunt fugiat soluta veritatis quod laborum autem id magnam
          pariatur.
        </p>
      </div>

      {/* {playIt()} */}

      <div>
        <Sound
          url={soundfile}
          playStatus={Sound.status[value]}
          //   playFromPosition={300 /* in milliseconds */}
          //     onLoading={setvalue('PLAYING')}
          //   onPlaying={this.handleSongPlaying}
          //   onFinishedPlaying={this.handleSongFinishedPlaying}
        />
      </div>
    </div>
  );
};

export default Home;
