const router = require("express").Router(),
  Users = require("../models/User"),
  bcrypt = require("bcrypt"),
  jwt = require("jsonwebtoken"),
  auth = require("../middleware/auth"),
  cookieParser = require("cookie-parser");

router.use(cookieParser());
router.post("/register", async (req, res) => {
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
router.get("/login", auth, (req, res) => {
  console.log("done");
});
router.post("/login", async (req, res) => {
  try {
    let token;
    const userLogin = await Users.findOne({ username: req.body.username });
    if (userLogin) {
      const validPassword = await bcrypt.compare(
        req.body.password,
        userLogin.password
      );
      token = await userLogin.generateAuthToken();
      console.log(token);
      res.cookie("jwt", token, {
        httpsOnly: true,
      });
      if (!validPassword) {
        res.status(400).json("wrong password");
      } else {
        res.json({ message: "Signed in" });
      }
    } else {
      res.status(400).json("Invalid credentials");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
