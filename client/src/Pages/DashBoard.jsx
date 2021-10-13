import React from 'react';
import { Box, CssBaseline, Toolbar, Typography } from '@mui/material';
import SideBar from '../Components/SideBar';
import BookCatalogue from '../Components/BookCatalogue';
export default function DashBoard() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SideBar />
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <BookCatalogue />
      </Box>
    </Box>
  );
}
