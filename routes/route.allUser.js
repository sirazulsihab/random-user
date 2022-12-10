const express = require('express');
const users = require('../json/users.json');

const router = express.Router();

router.route('/')
    .get((req, res) => {
        const {limit} = req.query;
        console.log(limit)
        const result = users.slice(0, limit);


        res.send(result);
    });

module.exports = router;