const express = require('express');
const router = express.Router();
const URL = require('../models/url');

router.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, {
        $push: {
            URL_History: { timestamp: Date.now() }
        }
    })
    res.redirect(entry.redirectURL);
});

module.exports = router;