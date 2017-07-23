const express = require('express');
const path = require('path');
const body = require('body-parser');
const morgan = require('morgan');
const endpoints = require('./constants/endpoints');
const config = require('./config/server.config');

const csv = require('./routes/csv.route');
const user = require('./routes/user.route');

const app = express();

app.use(morgan('combined'));
app.use('/', express.static(path.join(__dirname, config.public)));
app.use(body.json());
app.use(endpoints.csv, csv);
app.use(endpoints.user, user);


module.exports = app;

