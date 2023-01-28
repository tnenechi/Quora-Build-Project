'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserModel = undefined;

var _mongoose = require('mongoose');

var userSchema = new _mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        required: false
    }
});

var UserModel = exports.UserModel = (0, _mongoose.model)('User', userSchema);