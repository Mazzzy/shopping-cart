const express = require('express');
const server = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const { categories, getProductsByCategory } = require('./data');
const port = 5080;

server.use(cors())
server.use(bodyParser.json());

server.get('/', (req, res) => {
    res.send('Hello from shopping cart app server.');
});

server.get('/categories', (req, res) => {
    const products = getProductsByCategory('123456');
    res.json(products);
    // res.json(categories);
});

server.get('/categories', (req, res) => {
    res.json(categories);
});

server.get('/categories/:id', (req, res) => {
    // reading category id from the URL
    const id = req.params.id;

    // fetch products by category id from json file
    const products = getProductsByCategory(id);
    if(products) {
        res.json(products);
        return;
    }
    // sending 404 when not found something
    res.status(404).send('Products for given category not found');
   
});

server.listen(port, () => {
   console.log(`Shopping cart mock-server listening at ${port}`);
});