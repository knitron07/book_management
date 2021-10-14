import React, { useState } from 'react';
import '../Styles/Pages/_AddBook.scss';
import {
  Box,
  CssBaseline,
  Toolbar,
  TextField,
  Stack,
  Fab,
  Typography,
} from '@mui/material';
import SideBar from '../Components/SideBar';
import AddIcon from '@mui/icons-material/Add';

function AddBook() {
  const [publish, setPublish] = useState(new Date());
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SideBar />
      <Box component='main' sx={{ flexGrow: 1 }}>
        <Toolbar />
        <div className='addBookConatiner'>
          <div className='addBookWrapper'>
            <Typography variant='h4' mt={2} gutterBottom component='div'>
              Add Book
            </Typography>
            <Stack spacing={2}>
              <TextField
                id='outlined-basic'
                name='name'
                label='Name Of The Book'
                type='text'
                variant='outlined'
                fullWidth={true}
              />
              <TextField
                id='outlined-basic'
                name='author'
                label='Name Of Author'
                type='text'
                variant='outlined'
              />
              <TextField
                id='outlined-number'
                name='publishDate'
                label='Year of Publish'
                type='number'
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                id='outlined-number'
                name='copies'
                label='Number of copies avilable'
                type='number'
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id='outlined-multiline-static'
                name='aboutBook'
                label='About the book'
                multiline
                rows={3}
              />
              <div className='addButton'>
                <Fab size='medium' color='primary' aria-label='add'>
                  <AddIcon />
                </Fab>
              </div>
            </Stack>
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default AddBook;
