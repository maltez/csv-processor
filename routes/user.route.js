const router = require('express').Router();
const endpoints = require('../constants/endpoints');
const DataService = require('../services/data.service');
const UserModel = require('../models/user.model');

const userService = new DataService(UserModel);

router.get(endpoints.default, (req, res) => {
    userService.getAll()
        .then((data) => {
            res.json(data);
        });
});

router.post(endpoints.default, (req, res) => {
    userService.create(req.body)
        .then(data => res.json(data))
        .catch((err) => {
            res.status(500);
            res.json(err);
        });
});

module.exports = router;
