const express = require('express');
const authenticateToken = require('../middlewares/authenticate');
const { checkToken, generateToken } = require('../controllers/authController')
const { CHECK_TOKEN_ENDPOINT, GENERATE_TOKEN_ENDPOINT } = require('../constants/constants')
const router = express.Router();

router.get(CHECK_TOKEN_ENDPOINT, authenticateToken, checkToken);

router.get(GENERATE_TOKEN_ENDPOINT, generateToken);

module.exports = router;