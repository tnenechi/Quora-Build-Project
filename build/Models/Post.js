'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PostModel = undefined;

var _mongoose = require('mongoose');

var postSchema = new _mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    pictures: {
        type: [String],
        required: false
    },
    userID: {
        type: _mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    upvotes: {
        type: Number
    },
    downvotes: {
        type: Number
    }
});

var PostModel = exports.PostModel = (0, _mongoose.model)('Post', postSchema);