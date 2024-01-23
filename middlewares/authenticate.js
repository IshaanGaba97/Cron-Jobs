const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');

dotenv.config();


const secretKey = process.env.SECRET_KEY;

const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized - Token not provided" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Unauthorized - Token not valid" });
    }
    req.user = decoded;
    next();
  });
}

module.exports = [authenticateToken];


