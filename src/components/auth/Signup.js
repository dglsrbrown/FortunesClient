import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody
} from 'reactstrap';
import APIURL from '../../helpers/environment';

const Signup = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const pattern = /[0-9]|[^\w]/;

  const formValidation = event => {
    event.preventDefault();

    if (
      password.length >= 5 &&
      pattern.test(username) &&
      username.length >= 4
    ) {
      handle(event);
      console.log('Form Validated!');
    } else {
      setUsername('');
      setPassword('');
      console.log('Sign up check - landing value: ', props.landing);
      alert(
        'Username and or Password Error: username must be 4 or more characters and have at least one number or symobl. Password must be 5 or more characters.'
      );
    }
  };

  const handle = event => {
    event.preventDefault();
    console.log('inside handlesubmit!');
    console.log(username, password);
    fetch(`${APIURL}/fortunes/signup`, {
      method: 'POST',
      body: JSON.stringify({ username: username, password: password }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(res => res.json())
      .then(data => {
        props.updateToken(data.sessionToken); //sessionTiken relies on the response factored in the server
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className='signiup-root'>
      <div className='app-controls'>
        <h1 className='login-root black-shadow'>
          Sign Up<span id='PopoverFocus'> *</span>
        </h1>
      </div>
      <Form onSubmit={formValidation}>
        <FormGroup>
          <Label className= "black-shadow" htmlFor='username'>Username</Label>
          <Input
            onChange={e => setUsername(e.target.value)}
            name='username'
            value={username}
            placeholder='username'
          />
        </FormGroup>
        <FormGroup>
          <Label className= "black-shadow" htmlFor='password'>Password</Label>
          <Input
            onChange={e => setPassword(e.target.value)}
            name='password'
            value={password}
            placeholder='password'
          />
        </FormGroup>
        <Button className='button-styles' type='submit'>
          Signup
        </Button>
      </Form>

      <UncontrolledPopover
        trigger='hover'
        placement='right'
        target='PopoverFocus'
      >
        <PopoverBody style={{fontFamily: 'Quattrocento'}} color ='gray'>
          Username must be a minimum of 4 characters and have at least one number
          or symbol. Passwords must be a minimum of 5 characters.
        </PopoverBody>
      </UncontrolledPopover>
    </div>
  );
};

export default Signup;
