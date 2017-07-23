const router = require('express').Router();
const endpoints = require('../constants/endpoints');
const DataService = require('../services/data.service');
const UserModel = require('../models/user.model');
const CsvParser = require('../services/csv.service');

const userService = new DataService(UserModel);

router.put(endpoints.default, (req, res) => {
    CsvParser
        .parse(req)
        .then((data) => {
            for (let i = 0; i < data.length; i += 1) {
                userService.create(data[i]);
            }
        })
        .then((data) => {
            res.json(data);
        });
});


module.exports = router;
