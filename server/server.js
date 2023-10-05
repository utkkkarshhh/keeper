const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('Server is working just fine')});

app.listen('3000', (req, res) => {
    console.log(`Server is live on port : ${port}`);
})