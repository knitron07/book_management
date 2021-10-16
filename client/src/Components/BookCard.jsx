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
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AboutBook from './AboutBook';
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';

export default function BookCard({ book, setAllBook, allBooks }) {
  const nBuyer = book?.borrowers.length;
  const { user } = useContext(AuthContext);
  const [numberOfCopies, setNumberOfCopies] = useState(book.copies - nBuyer);
  const handlePurchase = async () => {
    setNumberOfCopies((prev) => --prev);
    try {
      // const res = axios.put();
    } catch (error) {}
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
    } catch (error) {
      console.log(error);
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
    </div>
  );
}
