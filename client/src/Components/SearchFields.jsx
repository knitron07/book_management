import React, { useState } from 'react';
import '../Styles/Components/_SearchFields.scss';
import {
  Box,
  Toolbar,
  TextField,
  Stack,
  Button,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import BookCatalogue from './BookCatalogue';

function SearchFields() {
  const [search, setSearch] = useState(false);
  const handleSearch = () => {
    setSearch(true);
  };
  return (
    <Box component='main' sx={{ flexGrow: 1 }}>
      <Toolbar />
      {!search ? (
        <div className='searchBookConatiner'>
          <div className='searchBookWrapper'>
            <Typography variant='h4' mt={2} gutterBottom component='div'>
              Search Books
            </Typography>
            <Stack spacing={2}>
              <TextField
                id='outlined-basic'
                label='Name Of The Book'
                type='text'
                variant='outlined'
                fullWidth={true}
              />
              <TextField
                id='outlined-basic'
                label='Name Of Author'
                type='text'
                variant='outlined'
              />
              <TextField
                id='outlined-number'
                label='Year of Publish'
                type='number'
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <div className='searchButton'>
                <Button
                  variant='contained'
                  onClick={handleSearch}
                  endIcon={<SearchIcon />}
                >
                  Search
                </Button>
              </div>
            </Stack>
          </div>
        </div>
      ) : (
        <BookCatalogue />
      )}
    </Box>
  );
}

export default SearchFields;
