import React from 'react';

import { Box, CssBaseline, Toolbar } from '@mui/material';
import SideBar from '../Components/SideBar';
import BookFields from '../Components/BookFields';

function AddBook() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SideBar />
      <Box component='main' sx={{ flexGrow: 1 }}>
        <Toolbar />
        <BookFields />

        {/* <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          open={open}
          onClose={handleClose}
          message='I love snacks'
          key={vertical + horizontal}
        /> */}
      </Box>
    </Box>
  );
}

export default AddBook;
