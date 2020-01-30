import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import './Auth.css';

const Auth = props => {
  return (
    <Container className='auth-container, test'>
      <div className='flexbox-1'>
        <Button className='flex-right'>Button</Button>
      </div>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <Signup updateToken={props.updateToken} />
        </Col>
      </Row>
      <Row>
        <Col md={{ size: 6, offset: 3 }}>
          <Login updateToken={props.updateToken} />
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
