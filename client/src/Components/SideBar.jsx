import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

const BookOptions = [
  { buttonName: 'View All', link: '/' },
  { buttonName: 'search', link: '/searchbook' },
];

export default function SideBar() {
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const handleDelete = () => {};

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant='h5' noWrap component='div'>
            {user.isAdmin ? 'Admin Dashboard' : 'User Dashboard'}
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
            <Typography variant='h6' noWrap component='div'>
              Books Section
            </Typography>
            {BookOptions.map((text, index) => (
              <a href={text.link} style={{ textDecoration: 'none' }}>
                <ListItem button key={text.buttonName}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
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
            <Typography variant='h6' noWrap component='div'>
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
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
