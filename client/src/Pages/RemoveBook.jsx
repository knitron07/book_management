import React from 'react';
import '../Styles/Pages/_RemoveBook.scss';
import { Box, CssBaseline, Toolbar, Typography } from '@mui/material';
import SideBar from '../Components/SideBar';
import BookCatalogue from '../Components/BookCatalogue';
import SearchFields from '../Components/SearchFields';

function RemoveBook() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SideBar />
      <Box component='main' sx={{ flexGrow: 1, p: 0 }}>
        <SearchFields />
      </Box>
    </Box>
  );
}

export default RemoveBook;
