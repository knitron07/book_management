const router = require('express').Router();
const Books = require('../models/Books');

//creating new Book
router.post('/addbook', async (req, res) => {
  try {
    const newBook = new Books({
      name: req.body.name,
      author: req.body.author,
      publishDate: req.body.publishDate,
      coverPicture: req.body.coverPicture,
      borrowers: req.body.borrowers,
      copies: req.body.copies,
    });

    const result = await newBook.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});
//delete a Book
router.delete('/deletebook/:bookid', async (req, res) => {
  try {
    const deleteBook = await Books.findByIdAndDelete(req.params.bookid);
    res.status(200).json('book deleted ');
  } catch (error) {
    res.status(500).json(error);
  }
});

//update book
router.put('/updatebook/:bookid', async (req, res) => {
  try {
    const book = await Books.findByIdAndUpdate(req.params.bookid, {
      $set: req.body,
    });

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get book by name and author
router.get('/:type/:typevalue', async (req, res) => {
  try {
    let books;
    if (req.params.type === 'name')
      books = await Books.find({ name: req.params.typevalue });
    else if (req.params.type === 'author')
      books = await Books.find({ author: req.params.typevalue });
    else res.status(200).json('invalid api');
    res.status(200).json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const books = await Books.find({});
    res.status(200).json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
module.exports = router;
