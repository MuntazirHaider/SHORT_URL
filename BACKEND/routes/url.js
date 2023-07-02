const express = require('express');
const { generateShortURL } = require('../controllers/genId');
const router = express.Router();

router.post('/', generateShortURL);

module.exports = router;