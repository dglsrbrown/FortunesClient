import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import './Auth.css';

const Auth = props => {
  const [toggle, setToggle] = useState(false);

  // const loginToggle = () => {
  //   console.log('toggle check: ', toggle);
  //   if (toggle === false) {
  //     return <Signup updateToken={props.updateToken} />;
  //   } else {
  //     // setToggle(false);
  //     return <Login updateToken={props.updateToken} />;

  //   }
  // };

  const loginToggle = () => {
    console.log('toggle check: ', props.toggleSignup);
    if (props.toggleSignup === false) {
      return <Signup updateToken={props.updateToken} />;
    } else {
      // setToggle(false);
      return <Login updateToken={props.updateToken} />;
    }
  };

  return (
    <Container className='auth-container, test'>
      <div className='flexbox-1'>
        {/* <Button className='flex-right' onClick={e => setToggle(toggle? false: true)}>
          Button
        </Button> */}
      </div>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          {/* <Signup updateToken={props.updateToken} /> */}
          {loginToggle()}
        </Col>
      </Row>
      {/* <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <Login updateToken={props.updateToken} />
        </Col>
      </Row> */}
    </Container>
  );
};

export default Auth;
