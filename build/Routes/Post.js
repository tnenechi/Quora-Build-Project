'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _postController = require('../Controller/postController');

var router = (0, _express.Router)();

//call the createPost() function when a request comes in via the create-post route

router.post('/api/create-post', (0, _express.json)(), function (request, response, next) {
    (0, _postController.createPost)(request, response, next);
});

exports.default = router;