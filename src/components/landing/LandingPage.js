import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import '../../assets/intro.mp3';

const LandingPage = props => {


  
  

  return (
    <div>
      {/* <audio ref='audio_tag' src='../../assets/intro.mp3' controls autoPlay/> */}
      <div className='row justify-content-center align-itmes-center'>
        <h2>TEST LANDING PAGE</h2>
      </div>

      <Container>
        <div className='row justify-content-center align-itmes-center'>
          <Button
            className='button-styles'
            onClick={() => props.toggleLanding()}
          >
            ENTER
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default LandingPage;
