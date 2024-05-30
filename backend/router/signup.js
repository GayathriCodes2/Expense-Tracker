//router/signup.js
const express = require('express');
const router = express.Router();
const signup = require('../controllers/signup')
router.post('/signup',signup.addsignup)

module.exports = router