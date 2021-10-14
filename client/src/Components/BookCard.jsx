import React from 'react';
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
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { red } from '@mui/material/colors';

export default function BookCard() {
  return (
    <Card sx={{ maxWidth: 340 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            R
          </Avatar>
        }
        title='Shrimp and Chorizo Paella'
        subheader='September 14, 2016'
      />
      <CardMedia
        component='img'
        height='194'
        image='/static/images/cards/paella.jpg'
        alt='Paella dish'
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <DeleteIcon color='error' fontSize='large' />
        </IconButton>
        <IconButton aria-label='add to favorites'>
          <DeleteIcon color='error' fontSize='large' />
        </IconButton>
        <IconButton aria-label='add to favorites'>
          <FileUploadIcon color='success' fontSize='large' />
        </IconButton>
      </CardActions>
    </Card>
  );
}
