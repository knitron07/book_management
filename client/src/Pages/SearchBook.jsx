import React from 'react';

import { Box, CssBaseline } from '@mui/material';
import SideBar from '../Components/SideBar';
import SearchFields from '../Components/SearchFields';

function SearchBook() {
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

export default SearchBook;
