const express = require('express');
const router = express.Router();
const URL = require('../models/url');

router.delete('/deleteurl/:id', async (req, res) => {
    try {
        const url = await URL.findByIdAndDelete(req.params.id);
        res.send("Deleted")
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});

module.exports = router;