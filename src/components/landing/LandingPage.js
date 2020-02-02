import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Sound from 'react-sound';
// import '../../assets/intro.mp3'

const LandingPage = props => {
  return (
    <div>
      <Sound
        url='src/assets/intro.mp3'
        playStatus={Sound.status.PLAYING}
        // playFromPosition={300 /* in milliseconds */}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      />
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
