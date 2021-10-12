import React from 'react';
import '../Styles/Pages/_Login.scss';
import { Button, Stack, TextField, Switch, Typography } from '@mui/material';

function Login() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className='LoginContainer'>
      <div className='LoginContainerWrapper'>
        <Stack direction='column' spacing={2}>
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
              button text
            </Typography>
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            <Typography variant='button' display='block'>
              button text
            </Typography>
          </Stack>

          <Button variant='contained' color='success'>
            Success
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default Login;
