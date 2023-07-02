const express = require('express');
const router = express.Router();
const URL = require('../models/url');


router.get('/fetchurls', async (req, res) => {
    try {
        const allurls = await URL.find({});
        res.json(allurls)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})

module.exports = router;