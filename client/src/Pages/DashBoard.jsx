import React, { useState, useEffect } from 'react';
import { Box, CssBaseline, Toolbar, Typography } from '@mui/material';
import SideBar from '../Components/SideBar';
import BookCatalogue from '../Components/BookCatalogue';
import axios from 'axios';

export default function DashBoard() {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const res = await axios.get('/book');

        let BooksData = [];
        BooksData = res.data;
        BooksData.sort((x, y) => {
          if (x.borrowers.length > y.borrowers.length) return -1;
          else return 1;
        });

        setAllBooks(BooksData);
      } catch (error) {
        console.log('book feaching m error', error);
      }
    };

    fetchAuthor();
  }, []);
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SideBar />
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography component='h4' variant='h4'>
          Recommended
        </Typography>
        <BookCatalogue allBooks={allBooks} setAllBook={setAllBooks} />
      </Box>
    </Box>
  );
}
