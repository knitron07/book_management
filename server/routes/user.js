const router = require('express').Router(),
  Users = require('../models/User'),
  bcrypt = require('bcrypt'),
  jwt = require('jsonwebtoken'),
  cookieParser = require('cookie-parser');

router.use(cookieParser());
router.post('/register', async (req, res) => {
  try {
    // generating hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //creating new user

    const newUser = new Users({
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      isAdmin: req.body.isAdmin,
      email: req.body.email,
      password: hashedPassword,
    });

    // saving user and returning response
    const user = await newUser.save();
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userLogin = await Users.findOne({ username: req.body.username });
    if (userLogin) {
      const validPassword = await bcrypt.compare(
        req.body.password,
        userLogin.password,
      );
      if (!validPassword) {
        res.status(400).json('wrong password');
      } else {
        const { password, ...others } = userLogin._doc;
        res.json(others);
      }
    } else {
      res.status(400).json('Invalid credentials');
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/deleteaccount/:id', async (req, res) => {
  try {
    const deleteAccount = await Users.findByIdAndDelete(req.params.id);
    res.status(200).json('account deleted');
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.put('/update/:userId', async (req, res) => {
  try {
    const user = await Users.findByIdAndUpdate(req.params.userId, {
      $set: req.body,
    });

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});
module.exports = router;
