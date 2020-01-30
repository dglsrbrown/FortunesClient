import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let handleSubmit = event => {
    event.preventDefault();
    console.log(username, password);
    fetch('http://localhost:4000/fortunes/login', {
      method: 'POST',
      body: JSON.stringify({ username: username, password: password }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(res => res.json())
      .then(data => {
        props.updateToken(data.sessionToken); //sessionTiken relies on the response factored in the server
      });
  };

  return (

    // style={{ display: 'none' }}
    <div className='login-root' >
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
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
        <Button type='submit'>Login</Button>
      </Form>
    </div>
  );
};

export default Login;
