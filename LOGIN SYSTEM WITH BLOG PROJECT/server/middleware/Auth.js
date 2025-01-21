const jwt = require("jsonwebtoken");
require("dotenv").config();

const Auth = (req, res, next) => {
  const { authToken } = req.cookies; // Changed token name for simplicity

  if (!authToken) {
    return res.status(400).json({ message: "Please log in first!" });
  }

  jwt.verify(authToken, process.env.PRIVATE_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token. Please log in again." });
    }

    req.user = decoded.userdata; // Attach user data to the request object
    next();
  });
};

module.exports = Auth;
