import React, { useState } from 'react';
import '../Styles/Components/_BookCard.scss';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Avatar,
  Typography,
  CardActions,
  IconButton,
  Chip,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AboutBook from './AboutBook';

const faid = {
  filter: 'brightness(50%)',
};

export default function BookCard({ book }) {
  const nBuyer = book?.borrowers.length;
  const [numberOfCopies, setNumberOfCopies] = useState(book.copies - nBuyer);

  return (
    <div className={numberOfCopies <= 0 ? faid : ''}>
      <Card sx={{ maxWidth: 340 }}>
        <CardHeader title={book?.name} subheader={book?.author} />
        <CardMedia
          component='img'
          height='194'
          image='/static/images/cards/paella.jpg'
          alt='Paella dish'
        />
        <CardContent>
          <Typography variant='body2' color='text.secondary'>
            <AboutBook Value={book.aboutBook} />
          </Typography>
          <Chip label={`Number of copies available : ${numberOfCopies}`} />
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <ShoppingCartIcon color='success' fontSize='large' />
          </IconButton>
          <IconButton aria-label='add to favorites'>
            <DeleteIcon color='error' fontSize='large' />
          </IconButton>
          <IconButton aria-label='add to favorites'>
            <FileUploadIcon color='success' fontSize='large' />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
