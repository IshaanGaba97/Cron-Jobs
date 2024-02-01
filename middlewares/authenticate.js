const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
const {TOKEN_NOT_PROVIDED, TOKEN_NOT_VALID, INTERNAL_SERVER_ERROR} = require('../constants/constants');
dotenv.config();

const secretKey = process.env.SECRET_KEY;

const authenticateToken = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: TOKEN_NOT_PROVIDED });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        console.error('Error verifying token:', err);
        return res.status(403).json({ error: TOKEN_NOT_VALID });
      }

      console.log(decoded);
      req.user = decoded;
      next();
    });
  } catch (error) {
    console.error('Error in authenticateToken middleware:', error);
    return res.status(500).json({ error: INTERNAL_SERVER_ERROR });
  }
}

module.exports = authenticateToken;
