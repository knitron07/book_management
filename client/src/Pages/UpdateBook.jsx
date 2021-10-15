import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import SideBar from '../Components/SideBar';
import BookFields from '../Components/BookFields';
import axios from 'axios';

function UpdateBook() {
  let { bookid } = useParams();
  const [bookData, setBookData] = useState(null);
  useEffect(() => {
    const fetchBookData = async () => {
      try {
        if (bookid) {
          const res = await axios.get(`/book/book/${bookid}`);
          setBookData(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchBookData();
  }, [bookid]);
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SideBar />

      <Box component='main' sx={{ flexGrow: 1, p: 0 }}>
        <Toolbar />
        {bookData && <BookFields book={bookData} />}
      </Box>
    </Box>
  );
}

export default UpdateBook;
