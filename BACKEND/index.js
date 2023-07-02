const express = require('express')
var cors = require('cors')
const { connectToMongoDb } = require('./db/db')
const bodyParser = require("body-parser");

const app = express();
app.use(cors())
app.use(bodyParser.json());
const PORT = 5000;

connectToMongoDb("mongodb://127.0.0.1:27017/short-url")
    .then(() => { console.log("Connected to mongodb") });

app.use(express.json());
app.use("/url", require('./routes/url'));
app.get('/:shortId', require('./routes/redirect'));
app.get('/analysis/:shortId', require('./routes/analysis'));
app.delete('/deleteurl/:id', require('./routes/delete'));
app.use('/api/url', require('./routes/fetchurls'))

app.listen(PORT, () => {
    console.log(`Server listening at PORT ${PORT}`);
})