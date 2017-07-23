const Sequelize = require('sequelize');
const sequelize = require('../services/db.provider');
const config = require('../config/db.config');

const User = sequelize.define(config.schemaNames.user, {
    Name: {
        type: Sequelize.STRING,
    },
    Surname: {
        type: Sequelize.STRING,
    },
    Email: {
        type: Sequelize.STRING,
    },
});

module.exports = User;
