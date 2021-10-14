import React from 'react';
import { Grid, Box } from '@mui/material';
import BookCard from './BookCard';
function BookCatalogue() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <BookCard />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <BookCard />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <BookCard />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <BookCard />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <BookCard />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <BookCard />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <BookCard />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <BookCard />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={4}>
          <BookCard />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={4}>
          <BookCard />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={4}>
          <BookCard />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={4}>
          <BookCard />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={4}>
          <BookCard />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={4}>
          <BookCard />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={4}>
          <BookCard />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={4}>
          <BookCard />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={4}>
          <BookCard />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={4}>
          <BookCard />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={4}>
          <BookCard />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={4}>
          <BookCard />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={4}>
          <BookCard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default BookCatalogue;
