const { User } = require("../models/User");
const jwt = require("jsonwebtoken");
//middleware to verify the token and authorize to next.
let auth = async (req, res, next) => {
  try {
    let token = req.cookies.jwt;
    const verifyUser = jwt.verify(
      token,
      "LoreipsumdolorsitametconsecteturLoreipsumdolorsitametconsectetur"
    );
    console.log(verifyUser);
    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = auth;
