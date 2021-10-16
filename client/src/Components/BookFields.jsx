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
  Snackbar,
  Alert,
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
  const [snackStatus, setSnackStatus] = useState({
    open: false,
    msg: '',
    severity: 'info',
  });

  const [bookData, setBookData] = useState(InitialBookFiels);

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackStatus((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const handleChange = (event) => {
    const name = event.target.name;
    setBookData((prev) => ({ ...prev, [name]: event.target.value }));
  };
  const handleAddBook = async (e) => {
    const name = e.target.name;
    console.log(name);
    try {
      await axios.post('book/addbook', bookData);
      setBookData(InitialBookFiels);
      setSnackStatus({
        open: true,
        msg: 'Book added!',
        severity: 'success',
      });
    } catch (error) {
      setSnackStatus({
        open: true,
        msg: error.message,
        severity: 'error',
      });
    }
  };
  const handleUpdatebook = async (e) => {
    try {
      await axios.put(`/book/updatebook/${book._id}`, bookData);
      setSnackStatus({
        open: true,
        msg: 'Book updated!',
        severity: 'success',
      });
    } catch (error) {
      setSnackStatus({
        open: true,
        msg: error.message,
        severity: 'error',
      });
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
  }, [book]);
  return (
    <div className='bookFiledsConatiner'>
      <div className='bookFiledsWrapper'>
        <Typography variant='h4' mt={2} gutterBottom component='div'>
          {book ? 'Update book' : 'Add book'}
        </Typography>
        <Stack spacing={2}>
          <TextField
            id='outlined-basic-required'
            name='name'
            value={bookData.name}
            label='Name Of The Book'
            type='text'
            variant='outlined'
            onChange={handleChange}
            fullWidth={true}
            required
          />
          <TextField
            id='outlined-basic-required'
            name='author'
            value={bookData.author}
            label='Name Of Author'
            type='text'
            variant='outlined'
            onChange={handleChange}
            required
          />

          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>
              Year of Publish
            </InputLabel>
            <Select
              labelId='demo-simple-select-label-required'
              id='demo-simple-select'
              name='publishYear'
              value={bookData.publishYear}
              label='Year of Publish'
              onChange={handleChange}
              defaultValue={bookData.publishYear}
              required
            >
              {yearOption}
            </Select>
          </FormControl>

          <TextField
            id='outlined-number-required'
            name='copies'
            value={bookData.copies}
            label='Number of copies avilable'
            type='number'
            onChange={handleChange}
            required
          />
          <TextField
            id='outlined-multiline-required'
            name='aboutBook'
            value={bookData.aboutBook}
            label='About the book'
            onChange={handleChange}
            multiline
            rows={3}
            required
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
                <Typography variant='poster'>
                  <AddIcon />
                </Typography>
              </Fab>
            ) : (
              <IconButton
                aria-label='add to favorites'
                name='upload'
                onClick={handleUpdatebook}
              >
                <FileUploadIcon color='primary' fontSize='large' />
              </IconButton>
            )}
          </div>
        </Stack>
      </div>
      <Snackbar
        open={snackStatus.open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          variant='filled'
          severity={snackStatus.severity}
        >
          {snackStatus.msg}
        </Alert>
      </Snackbar>
    </div>
  );
}
