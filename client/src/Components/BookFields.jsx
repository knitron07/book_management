import React, { useEffect, useState } from 'react';
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
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import FileUploadIcon from '@mui/icons-material/FileUpload';
const yearOption = [];
for (let i = 2021; i > 1950; i--) {
  yearOption.push(
    <MenuItem key={i} value={i}>
      {i}
    </MenuItem>,
  );
}
const InitialBookFiels = {
  name: '',
  author: '',
  publishYear: '',
  copies: '',
  aboutBook: '',
};
export default function BookFields({ book }) {
  const [bookData, setBookData] = useState(InitialBookFiels);
  const handleChange = (event) => {
    const name = event.target.name;
    setBookData((prev) => ({ ...prev, [name]: event.target.value }));
  };
  const handleAddBook = async (e) => {
    const name = e.target.name;
    console.log(name);
    try {
      const res = await axios.post('book/addbook', bookData);
      setBookData(InitialBookFiels);
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdatebook = async (e) => {
    try {
      const res = await axios.put(`/book/updatebook/${book._id}`, bookData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (book) {
      const x = {
        name: book.name,
        author: book.author,
        publishYear: book.publishYear,
        copies: book.copies,
        aboutBook: book.aboutBook,
      };

      setBookData(x);
    }
  }, []);
  return (
    <div className='bookFiledsConatiner'>
      <div className='bookFiledsWrapper'>
        <Typography variant='h4' mt={2} gutterBottom component='div'>
          {book ? 'Update book' : 'Add book'}
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
              defaultValue={bookData.publishYear}
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
            id='outlined-multiline'
            name='aboutBook'
            value={bookData.aboutBook}
            label='About the book'
            onChange={handleChange}
            multiline
            rows={3}
          />
          <div className='addButton'>
            {!book ? (
              <Fab
                name='addbook'
                size='medium'
                color='primary'
                aria-label='add'
                onClick={handleAddBook}
              >
                <AddIcon />
              </Fab>
            ) : (
              <IconButton
                aria-label='add to favorites'
                name='upload'
                onClick={handleUpdatebook}
              >
                <FileUploadIcon color='success' fontSize='large' />
              </IconButton>
            )}
          </div>
        </Stack>
      </div>
    </div>
  );
}
