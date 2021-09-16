const categoryRoute = (app) => {
    const { categories, getProductsByCategory } = require('../data');
    
    // READ all categories
    app.get('/categories', (req, res) => {
        res.send(categories);
    });

    // READ all products from category
    app.get('/categories/:id', (req, res) => {
        // reading category id from the URL
        const id = req.params.id;

        // fetch products by category id from json file
        const products = getProductsByCategory(id);
        if(products) {
            res.send(products);
            return;
        }
        // sending 404 when not found something
        res.status(404).send('Products for given category not found');
    
    });

    
};

module.exports = categoryRoute;