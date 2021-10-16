import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Components/_BookCard.scss';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Chip,
  Snackbar,
  Alert,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AboutBook from './AboutBook';
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';

export default function BookCard({ book, setAllBook, allBooks }) {
  const [snackStatus, setSnackStatus] = useState({
    open: false,
    msg: '',
    severity: 'info',
  });

  const { user } = useContext(AuthContext);
  const [numberOfCopies, setNumberOfCopies] = useState(book.copies);

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackStatus((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const handlePurchase = async () => {
    const x = numberOfCopies - 1;
    setNumberOfCopies((prev) => --prev);
    try {
      await axios.put(`/book/purchase/${user._id}/${book._id}`, {
        value: x,
      });
      setSnackStatus({
        open: true,
        msg: `Thank you for purchasing a book ${user.firstname}`,
        severity: 'success',
      });
    } catch (error) {
      setSnackStatus({
        open: true,
        msg: 'Book not purchase',
        severity: 'error',
      });
    }
  };
  const handleDelete = async () => {
    const bookId = book._id;
    try {
      await axios.delete(`/book/deletebook/${bookId}`);
      const AllBook = [];
      allBooks.forEach((singleBook) => {
        if (singleBook._id !== bookId) {
          AllBook.push(singleBook);
        }
      });
      console.log(AllBook);
      setAllBook(AllBook);
      setSnackStatus({
        open: true,
        msg: 'Book Deleted!',
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
  return (
    <div className='card'>
      <Card sx={{ maxWidth: 350 }}>
        <CardHeader title={book?.name} subheader={book?.author} />
        <CardMedia
          component='img'
          height='194'
          image='https://edit.org/images/cat/book-covers-big-2019101610.jpg'
          alt='Paella dish'
        />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            <AboutBook Value={book.aboutBook} />
          </Typography>
          <Chip label={`Number of copies available : ${numberOfCopies}`} />
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites' onClick={handlePurchase}>
            <ShoppingCartIcon color='success' fontSize='large' />
          </IconButton>
          {user.isAdmin && (
            <Link
              to={`/updatebook/${book._id}`}
              style={{ textDecoration: 'none' }}
            >
              <IconButton aria-label='add to favorites'>
                <FileUploadIcon color='success' fontSize='large' />
              </IconButton>
            </Link>
          )}
          {user.isAdmin && (
            <IconButton aria-label='add to favorites' onClick={handleDelete}>
              <DeleteIcon color='error' fontSize='large' />
            </IconButton>
          )}
        </CardActions>
      </Card>
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
