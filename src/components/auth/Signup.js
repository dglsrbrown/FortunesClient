import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import APIURL from '../../helpers/environment';

const Signup = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
      <h1>Sign Up</h1>
      <Form onSubmit={handle}>
        <FormGroup>
          <Label htmlFor='username'>Username</Label>
          <Input
            onChange={e => setUsername(e.target.value)}
            name='username'
            value={username}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='password'>Password</Label>
          <Input
            onChange={e => setPassword(e.target.value)}
            name='password'
            value={password}
          />
        </FormGroup>
        <Button type='submit'>Signup</Button>
      </Form>
    </div>
  );
};

export default Signup;
