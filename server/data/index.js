const categories = require('./categories/navigationitems.json');

module.exports = {
    "categories": categories.children,
    "getProductsByCategory": (id) => {
        try {
            return require(`./products/${id}`)
        } catch(error) {
            return null;
        }
    }
}