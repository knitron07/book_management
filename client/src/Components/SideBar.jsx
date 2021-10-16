import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { AuthContext } from '../Context/AuthContext.js';
import {
  Box,
  Drawer,
  AppBar,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import axios from 'axios';

const BookOptions = [
  { buttonName: 'View All', link: '/viewall' },
  { buttonName: 'search', link: '/searchbook' },
];

export default function SideBar() {
  let history = useHistory();
  const { user } = useContext(AuthContext);
  const handleDelete = async () => {
    await axios.delete(`/users/deleteaccount/${user._id}`);
    localStorage.removeItem('user');
    history.push('/');
    window.location.reload();
  };
  const handleSignout = () => {
    localStorage.removeItem('user');
    history.push('/');
    window.location.reload();
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant='h5' noWrap component='div'>
            <a href='/'>
              {user.isAdmin ? (
                <Typography variant='poster'>Admin Dashboard</Typography>
              ) : (
                <Typography variant='poster'>User Dashboard</Typography>
              )}
            </a>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <Typography variant='h6' pl={2} noWrap component='div'>
              Books Section
            </Typography>
            {BookOptions.map((text, index) => (
              <a href={text.link}>
                <ListItem button key={text.buttonName}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <MenuBookIcon /> : <SearchIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text.buttonName} />
                </ListItem>
              </a>
            ))}
            {user.isAdmin && (
              <a href='/addbook' style={{ textDecoration: 'none' }}>
                <ListItem button key='Add'>
                  <ListItemIcon>
                    <NoteAddIcon />
                  </ListItemIcon>
                  <ListItemText primary='Add' />
                </ListItem>
              </a>
            )}
          </List>
          <Divider />
          <List>
            <Typography variant='h6' pl={2} noWrap component='div'>
              Profile
            </Typography>
            <Link to='/profile' style={{ textDecoration: 'none' }}>
              <ListItem button key='View Account'>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary='View Account' />
              </ListItem>
            </Link>

            <ListItem button onClick={handleDelete}>
              <ListItemIcon>
                <PersonOffIcon />
              </ListItemIcon>
              <ListItemText primary='DeleteAccount' />
            </ListItem>
            <ListItem button onClick={handleSignout}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary='Sign out' />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
