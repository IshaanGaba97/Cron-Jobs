const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const {TOKEN_VALIDATED} = require('../constants/constants');
dotenv.config();
const secretKey = process.env.SECRET_KEY;

const checkToken = async (req, res) => {
    res.json({ message: TOKEN_VALIDATED, user: req.user });
}

const generateToken = async (req, res) => {
    const user = { username: 'Ishaan' };
    const token = jwt.sign(user, secretKey);
    res.json({ token });
}

module.exports = { checkToken, generateToken }