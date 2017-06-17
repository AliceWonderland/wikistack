'use strict'

const express = require('express'); //server
const router=express.Router();

router.get('/', function(req, res, next) {
    res.send('got to GET /users/');
});

router.post('/', function(req, res, next) {
    res.send('got to POST /users/');
});

router.get('/add', function(req, res, next) {
    res.send('got to GET /users/add');
});

module.exports=router;