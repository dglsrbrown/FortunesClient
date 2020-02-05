import React from 'react';
import { Container, Button } from 'reactstrap';
import soundfile from '../../assets/dance.wav';
import Sound from 'react-sound';
import './landing.css';

const LandingPage = props => {
  return (
    <div>

      <div className='row justify-content-center m-0 p-0'>
        <h2 className='red-shadow'>Your Fate is at Hand!</h2>
      </div>

      <Container>
        <div className='row justify-content-center align-itmes-center'>
          <Button
            className='button-styles begin'
            onClick={() => props.toggleLanding()}
          >
            BEGIN
          </Button>
        </div>
        <Sound url={soundfile} playStatus={Sound.status.PLAYING} />
      </Container>
    </div>
  );
};

export default LandingPage;
