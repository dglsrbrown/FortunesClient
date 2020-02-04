import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';


const LandingPage = props => {
  // const playit = () => {
  //   setTimeout(() => {
  //     return (
       
  //     );
  //   }, 500);
  // };

  return (
    <div>
      {/* {playit()} */}
      
      <div className='row justify-content-center m-0 p-0'>
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
