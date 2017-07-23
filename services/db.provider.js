const Sequelize = require('sequelize');
const config = require('../config/db.config');

const sequelize = new Sequelize(config.dbName, null, null, {
    dialect: config.dialect,
    storage: config.storage,
});

module.exports = sequelize;
