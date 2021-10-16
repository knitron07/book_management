import React, { useState } from 'react';
import '../Styles/Pages/_Login.scss';
import {
  Button,
  Stack,
  TextField,
  Switch,
  Typography,
  Snackbar,
  Alert,
} from '@mui/material';
import axios from 'axios';

function Register() {
  const [checked, setChecked] = useState(true);
  const [register, setRegister] = useState({});

  const [snackStatus, setSnackStatus] = useState({
    open: false,
    msg: '',
    severity: 'info',
  });
  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackStatus((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const handleSwitch = (event) => {
    setChecked((prev) => !prev);
    setRegister((prev) => ({ ...prev, isAdmin: checked }));
  };
  const handlechange = (event) => {
    const name = event.target.name;
    setRegister((prev) => ({ ...prev, [name]: event.target.value }));
  };

  const handleRigester = async () => {
    try {
      if (checked === true && register.special === 'special') {
        const { special, ...other } = register;
        await axios.post('/users/register', other);
      } else {
        await axios.post('/users/register', register);
      }

      setSnackStatus({
        open: true,
        msg: 'Account Created!',
        severity: 'success',
      });
    } catch (error) {
      console.log(error);
      setSnackStatus({
        open: true,
        msg: error.message,
        severity: 'error',
      });
    }
  };
  return (
    <div className='LoginContainer'>
      <div className='LoginContainerWrapper'>
        <Typography component='h4' variant='h4'>
          Register
        </Typography>
        <Stack direction='column' spacing={2}>
          <TextField
            id='outlined-password-input'
            name='firstname'
            label='First Name'
            type='text'
            autoComplete='Enter your Username'
            onChange={handlechange}
          />
          <TextField
            id='outlined-password-input'
            name='lastname'
            label='Last Name'
            type='text'
            autoComplete='Enter your Username'
            onChange={handlechange}
          />
          <TextField
            id='outlined-password-input'
            name='email'
            label='Email Id'
            type='text'
            autoComplete='Enter your Username'
            onChange={handlechange}
          />
          <TextField
            id='outlined-password-input'
            name='username'
            label='Username'
            type='text'
            autoComplete='Enter your Username'
            onChange={handlechange}
          />
          <TextField
            id='outlined-password-input'
            name='password'
            label='Password'
            type='password'
            autoComplete='current-password'
            onChange={handlechange}
          />

          <Stack direction='row' spacing={2}>
            <Typography variant='button' display='block'>
              Member
            </Typography>
            <Switch
              onChange={handleSwitch}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            <Typography variant='button' display='block'>
              Admin
            </Typography>
          </Stack>
          {!checked && (
            <TextField
              id='outlined-password-input'
              label='Special Password to make Admin Account'
              name='special'
              type='password'
              autoComplete='current-password'
              onChange={handlechange}
            />
          )}
          <Button variant='contained' color='primary' onClick={handleRigester}>
            <Typography variant='poster'>Register</Typography>
          </Button>
        </Stack>
      </div>
      <Snackbar
        open={snackStatus.open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          variant='filled'
          severity={snackStatus.severity}
        >
          {snackStatus.msg}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Register;
