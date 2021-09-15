const categoryRoute = require('./category');
const categoryRoutes = require('./category');
const orderRoutes = require('./order');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('Hello from shopping cart app server.');
    });

    // category routes
    categoryRoute(app);

    // order routes
    orderRoutes(app, fs);

};

module.exports = appRouter;