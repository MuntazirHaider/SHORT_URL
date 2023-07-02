const express = require('express');
const { getAnalysis } = require('../controllers/getAnalysis');
const router = express.Router();
const URL = require('../models/url');

router.get('/analysis/:shortId',getAnalysis);

module.exports = router;