import React, { useState } from 'react';
import '../Styles/Components/_SearchFields.scss';
import {
  Box,
  Toolbar,
  TextField,
  Stack,
  Button,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@mui/material';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import BookCatalogue from './BookCatalogue';
import { useEffect } from 'react';

function SearchFields() {
  const [search, setSearch] = useState(false);
  const [allBooks, setAllBooks] = useState([]);
  const [allAuthor, setAllAuthor] = useState([]);
  const [allTitle, setAllTitle] = useState([]);
  const [allPublish, setAllPublish] = useState([]);

  const handleSelectAuthor = (event) => {
    let BookData = [];
    const AllBooks = allBooks;
    let AllTitle = [];
    AllBooks.forEach((singleBook) => {
      if (singleBook.author === event.target.value) {
        BookData.push(singleBook);
        !AllTitle.some((x) => x === singleBook.name) &&
          AllTitle.push(singleBook.name);
      }
    });
    console.log(AllTitle);
    setAllTitle(AllTitle);
    setAllBooks(BookData);
  };

  const handleNameChange = (event) => {
    let BookData = [];
    const AllBooks = allBooks;
    const AllPublish = [];

    AllBooks.forEach((singleBook) => {
      if (singleBook.name === event.target.value) {
        BookData.push(singleBook);
        !AllPublish.some((x) => x === singleBook.publishDate) &&
          AllPublish.push(singleBook.publishDate);
      }
    });
    setAllPublish(AllPublish);
    setAllBooks(BookData);
  };

  const handlePublishChange = (event) => {
    let BookData = [];
    const AllBooks = allBooks;

    AllBooks.forEach((singleBook) => {
      if (singleBook.publishDate === event.target.value) {
        BookData.push(singleBook);
      }
    });

    setAllBooks(BookData);
  };
  const handleSearch = () => {
    setSearch(true);
  };

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const res = await axios.get('/book');
        console.log(res.data);
        let BooksData = [];
        BooksData = res.data;
        setAllBooks(BooksData);

        const AuthorName = [];
        const AllPublish = [];
        const AllTitle = [];
        BooksData.forEach((singleBook) => {
          const author = singleBook.author;
          !AuthorName.some((x) => x === author) && AuthorName.push(author);

          !AllTitle.some((x) => x === singleBook.name) &&
            AllTitle.push(singleBook.name);

          !AllPublish.some((x) => x === singleBook.publishDate) &&
            AllPublish.push(singleBook.publishDate);
        });
        setAllAuthor(AuthorName);
        setAllTitle(AllTitle);
        setAllPublish(AllPublish);
      } catch (error) {
        console.log('book feaching m error', error);
      }
    };

    fetchAuthor();
  }, []);
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
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>
                  Name Of Author
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  label='Name Of Author'
                  onChange={handleSelectAuthor}
                >
                  {allAuthor.map((name, idx) => {
                    return (
                      <MenuItem key={idx} value={name}>
                        {name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>
                  Name Of The Book
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  label='Name Of The Book'
                  onChange={handleNameChange}
                >
                  {allTitle.map((name, idx) => {
                    return (
                      <MenuItem key={idx} value={name}>
                        {name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>
                  Year of Publish
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  label='Year of Publish'
                  onChange={handlePublishChange}
                >
                  {allPublish.map((name, idx) => {
                    return (
                      <MenuItem key={idx} value={name}>
                        {name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>

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
        <BookCatalogue allBooks={allBooks} />
      )}
    </Box>
  );
}

export default SearchFields;
