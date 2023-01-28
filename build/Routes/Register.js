'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _registerController = require('../Controller/registerController');

var router = (0, _express.Router)();

//When a post request comes in on the register route, call the signUp() function
router.post('/api/register', (0, _express.json)(), function (request, response, next) {
    (0, _registerController.signUp)(request, response, next);
});

exports.default = router;