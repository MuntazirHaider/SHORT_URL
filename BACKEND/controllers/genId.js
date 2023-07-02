const shortid = require('shortid');
const URL = require('../models/url')
async function generateShortURL(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: 'Invalid Credentials' });
    const shortId = shortid();
    await URL.create({
        shortId: shortId,
        redirectURL: body.url,
        URL_History: [],
    });

    return res.json({ id: shortId });
};

module.exports = { generateShortURL }