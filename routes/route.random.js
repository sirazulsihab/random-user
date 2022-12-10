const express = require('express');
const users = require('../json/users.json');

const router = express.Router();

router.route('/')
    .get((req, res) => {

        // users.map(user => {

        // })
        const keys = Object.keys(users);
        const randomIndex = Math.floor(Math.random() * keys.length)
        const randomKey = keys[randomIndex];
        const user = users[randomKey];

        console.log('Random Name', user)

        res.json(user)
    })

module.exports = router;