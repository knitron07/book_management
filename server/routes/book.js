const router = require('express').Router();
const Books = require('../models/Books');

//creating new Book
router.post('/addbook', async (req, res) => {
  try {
    const newBook = new Books({
      name: req.body.name,
      author: req.body.author,
      publishYear: req.body.publishYear,
      coverPicture: req.body.coverPicture,
      aboutBook: req.body.aboutBook,
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

//get book by bookid
router.get('/book/:bookid', async (req, res) => {
  try {
    const book = await Books.findByIdAndUpdate(req.params.bookid);
    res.status(200).json(book);
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

router.put('/purchase/:userId/:bookId', async (req, res) => {
  try {
    await Books.findByIdAndUpdate(req.params.bookId, {
      $push: { borrowers: req.params.userId },
      $set: { copies: req.body.value },
    });
    // await Books.findByIdAndUpdate(req.params.bookId, {
    //  ,
    // });
    res.status(200).json('prchase');
  } catch (error) {
    console.log(error);
    res.status(500).json('not prchase');
  }
});
module.exports = router;
