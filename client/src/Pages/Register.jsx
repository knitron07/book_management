import React, { useState } from 'react';
import '../Styles/Pages/_Login.scss';
import { Button, Stack, TextField, Switch, Typography } from '@mui/material';

function Register() {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked((prev) => !prev);
  };

  return (
    <div className='LoginContainer'>
      <div className='LoginContainerWrapper'>
        <Stack direction='column' spacing={2}>
          <TextField
            id='outlined-password-input'
            label='First Name'
            type='text'
            autoComplete='Enter your Username'
          />
          <TextField
            id='outlined-password-input'
            label='Last Name'
            type='text'
            autoComplete='Enter your Username'
          />
          <TextField
            id='outlined-password-input'
            label='Email Id'
            type='text'
            autoComplete='Enter your Username'
          />
          <TextField
            id='outlined-password-input'
            label='Username'
            type='text'
            autoComplete='Enter your Username'
          />
          <TextField
            id='outlined-password-input'
            label='Password'
            type='password'
            autoComplete='current-password'
          />

          <Stack direction='row' spacing={2}>
            <Typography variant='button' display='block'>
              Member
            </Typography>
            <Switch
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            <Typography variant='button' display='block'>
              Admin
            </Typography>
          </Stack>
          {checked && (
            <TextField
              id='outlined-password-input'
              label='Special Password to make Admin Account'
              type='password'
              autoComplete='current-password'
            />
          )}
          <Button variant='contained' color='success'>
            Register
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default Register;
