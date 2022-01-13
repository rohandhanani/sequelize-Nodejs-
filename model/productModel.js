const Sequelize = require('sequelize')
const sequelize = require('./index')

const Product = sequelize.define("product", {
    title: {
        type: Sequelize.JSON,
    },
    price: {
        type: Sequelize.INTEGER,
    },
    description: {
        type: Sequelize.TEXT,
    },
    published: {
        type: Sequelize.BOOLEAN,
    }
});

module.exports = Product;