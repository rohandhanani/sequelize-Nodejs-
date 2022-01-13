const Sequelize = require("sequelize");
const dbConfig = require("../dbconfig");
const path = require('path');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
    }
)

sequelize.authenticate()
    .then(() => {
        console.log('connnected...');
    }).catch(err => {
        console.log(err);
    });


module.exports = sequelize