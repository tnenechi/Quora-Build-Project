"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require("express");

var _commentController = require("../Controller/commentController");

var router = (0, _express.Router)();

//call the createComment() function when a request comes in via the create-comment route

router.post('/api/create-comment', (0, _express.json)(), function (request, response, next) {
    (0, _commentController.createComment)(request, response, next);
});

exports.default = router;