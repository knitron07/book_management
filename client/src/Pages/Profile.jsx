import React, { useContext, useEffect, useState } from 'react';
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
import axios from 'axios';

export default function Profile() {
  const { user } = useContext(AuthContext);
  const [update, setUpdate] = useState({ firstname: '', lastname: '' });
  const handleChange = (event) => {
    const name = event.target.name;
    setUpdate((prev) => ({ ...prev, [name]: event.target.value }));
  };

  const handleUpdate = async (event) => {
    try {
      await axios.put(`/users/update/${user._id}`, update);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setUpdate({ firstname: user.firstname, lastname: user.lastname });
  }, [user]);
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
                  src='https://i.pinimg.com/474x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg'
                  sx={{ width: 200, height: 200 }}
                />
              </div>
              <TextField
                id='outlined-basic'
                label='First Name'
                variant='outlined'
                name='firstname'
                value={update.firstname}
                onChange={handleChange}
              />

              <TextField
                id='outlined-basic'
                label='Last Name'
                name='lastname'
                variant='outlined'
                value={update.lastname}
                onChange={handleChange}
              />
              <TextField
                id='outlined-read-only-input'
                label='Username'
                value={user.username}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                id='outlined-read-only-input'
                label='Email'
                value={user.email}
                InputProps={{
                  readOnly: true,
                }}
              />
              <div className='uploadButton'>
                <IconButton
                  aria-label='add to favorites'
                  onClick={handleUpdate}
                >
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
