const URL = require('../models/url')
async function getAnalysis(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    return res.json({
        totalClicks: result.URL_History.length,
        analytics: result.URL_History,
    });
};

module.exports = { getAnalysis }