import React from 'react';
import '../Styles/Components/_BookCatalogue.scss';
import { Grid, Box } from '@mui/material';
import BookCard from './BookCard';
function BookCatalogue({ allBooks, setAllBook }) {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={4}>
        {allBooks.map((singlebook) => {
          return (
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <BookCard
                book={singlebook}
                setAllBook={setAllBook}
                allBooks={allBooks}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default BookCatalogue;
