import React, { useState } from 'react';
import '../Styles/Components/_BookFields.scss';
import {
  TextField,
  Stack,
  Fab,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';

const yearOption = [];
for (let i = 2021; i > 1950; i--) {
  yearOption.push(<MenuItem value={i}>{i}</MenuItem>);
}

export default function BookFields({ book }) {
  const [bookData, setBookData] = useState({
    name: book?.name,
    author: book?.author,
    publishYear: book?.publishYear,
    copies: book?.copies,
    aboutBook: book?.aboutBook,
  });
  const handleChange = (event) => {
    const name = event.target.name;
    setBookData((prev) => ({ ...prev, [name]: event.target.value }));
  };
  const handleSubmmit = async () => {
    try {
      const res = await axios.post('/book/addbook', bookData);
      setBookData({
        name: book?.name,
        author: book?.author,
        publishYear: book?.publishYear,
        copies: book?.copies,
        aboutBook: book?.aboutBook,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='bookFiledsConatiner'>
      <div className='bookFiledsWrapper'>
        <Typography variant='h4' mt={2} gutterBottom component='div'>
          Add Book
        </Typography>
        <Stack spacing={2}>
          <TextField
            id='outlined-basic'
            name='name'
            value={bookData.name}
            label='Name Of The Book'
            type='text'
            variant='outlined'
            onChange={handleChange}
            fullWidth={true}
          />
          <TextField
            id='outlined-basic'
            name='author'
            value={bookData.author}
            label='Name Of Author'
            type='text'
            variant='outlined'
            onChange={handleChange}
          />

          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>
              Year of Publish
            </InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              name='publishYear'
              value={bookData.publishYear}
              label='Year of Publish'
              onChange={handleChange}
            >
              {yearOption}
            </Select>
          </FormControl>

          <TextField
            id='outlined-number'
            name='copies'
            value={bookData.copies}
            label='Number of copies avilable'
            type='number'
            onChange={handleChange}
          />
          <TextField
            id='outlined-multiline-static'
            name='aboutBook'
            value={bookData.aboutBook}
            label='About the book'
            onChange={handleChange}
            multiline
            rows={3}
          />
          <div className='addButton'>
            <Fab
              size='medium'
              color='primary'
              aria-label='add'
              onClick={handleSubmmit}
            >
              <AddIcon />
            </Fab>
          </div>
        </Stack>
      </div>
    </div>
  );
}
