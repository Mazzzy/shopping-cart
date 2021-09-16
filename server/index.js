const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 5080;

// routes
const routes = require('./routes/routes.js')(app, fs);

const server = app.listen(port, () => {
    console.log(`Shopping cart mock-server listening at ${server.address().port}`);
});
