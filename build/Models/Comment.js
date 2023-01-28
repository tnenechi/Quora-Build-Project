'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CommentModel = undefined;

var _mongoose = require('mongoose');

var commentSchema = new _mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    userID: {
        type: _mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    postID: {
        type: _mongoose.Schema.Types.ObjectId, ref: 'Post'
    },
    upvotes: {
        type: Number
    },
    downvotes: {
        type: Number
    }
});

var CommentModel = exports.CommentModel = (0, _mongoose.model)('Comment', commentSchema);