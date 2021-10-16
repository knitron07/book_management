import React, { useContext } from 'react';
import '../Styles/Pages/_Profile.scss';
import {
  Box,
  CssBaseline,
  Avatar,
  Stack,
  TextField,
  Toolbar,
  IconButton,
} from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import SideBar from '../Components/SideBar';
import { AuthContext } from '../Context/AuthContext';

export default function Profile() {
  const { user } = useContext(AuthContext);
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SideBar />
      <Box component='main' sx={{ flexGrow: 1 }}>
        <Toolbar />
        <div className='profileContainer'>
          <div className='profileContainerWrapper'>
            <Stack spacing={2}>
              <div className='avatarContainer'>
                <Avatar
                  alt='Remy Sharp'
                  src='https://data.whicdn.com/images/322027365/original.jpg?t=1541703413'
                  sx={{ width: 200, height: 200 }}
                />
              </div>
              <TextField
                id='outlined-basic'
                label='First Name'
                defaultValue='Hello Worl'
                variant='outlined'
                value={user.firstname}
              />
              <TextField
                id='outlined-basic'
                label='Last Name'
                defaultValue='Hello Worl'
                variant='outlined'
                value={user.lastname}
              />
              <TextField
                id='outlined-read-only-input'
                label='Username'
                defaultValue='Hello World'
                value={user.username}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id='outlined-read-only-input'
                label='Email'
                defaultValue='Hello World'
                value={user.email}
                InputProps={{
                  readOnly: true,
                }}
              />
              <div className='uploadButton'>
                <IconButton aria-label='add to favorites'>
                  <FileUploadIcon color='primary' fontSize='large' />
                </IconButton>
              </div>
            </Stack>
          </div>
        </div>
      </Box>
    </Box>
  );
}
