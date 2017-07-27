const router = require('express').Router();
const fs = require('fs');
const endpoints = require('../constants/endpoints');
const DataService = require('../services/data.service');
const UserModel = require('../models/user.model');
const CsvParser = require('../services/csv.service');

const userService = new DataService(UserModel);

router.post(endpoints.default, (req, res) => {
    const stream = fs.createWriteStream('./temp.csv');
    req.pipe(stream);
    
    CsvParser
        .parse(req)
        .then((data) => {
            for (let i = 0; i < data.length; i += 1) {
                userService.create(data[i]);
            }
        })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
            res.status(500);
            res.json(err);
        });
});


module.exports = router;
