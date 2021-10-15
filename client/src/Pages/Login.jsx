import React, { useContext, useState } from 'react';
import '../Styles/Pages/_Login.scss';
import { loginCall } from '../apiCalls';
import { AuthContext } from '../Context/AuthContext';

import {
  Button,
  Stack,
  TextField,
  Switch,
  Typography,
  CircularProgress,
} from '@mui/material';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleChange = (event) => {
    if (event.target.name === 'password') {
      setPassword(event.target.value);
    } else {
      setUsername(event.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      {
        username: username,
        password: password,
      },
      dispatch,
    );
  };
  return (
    <div className='LoginContainer'>
      <div className='LoginContainerWrapper'>
        <Stack direction='column' spacing={2}>
          <TextField
            id='outlined-password-input'
            name='username'
            label='Username'
            type='text'
            autoComplete='Enter your Username'
            onChange={handleChange}
          />
          <TextField
            id='outlined-password-input'
            name='password'
            label='Password'
            type='password'
            autoComplete='current-password'
            onChange={handleChange}
          />
          <Button variant='contained' href='/register' color='success'>
            {!isFetching ? 'Register' : <CircularProgress />}
          </Button>
          <Button variant='contained' onClick={handleSubmit} color='success'>
            {!isFetching ? 'Login' : <CircularProgress />}
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default Login;
