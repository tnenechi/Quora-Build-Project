"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createComment = undefined;

var _express = require("express");

var _Comment = require("../Models/Comment");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var createComment = exports.createComment = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, response, next) {
        var _request$body, comment, userID, postID, newComment;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        //Get the fields from the request body
                        _request$body = request.body, comment = _request$body.comment, userID = _request$body.userID, postID = _request$body.postID;

                        //Check if the requied field is empty

                        if (comment) {
                            _context.next = 3;
                            break;
                        }

                        return _context.abrupt("return", response.status(400).json({ 'message': 'A comment is required :)' }));

                    case 3:

                        //try to create a new comment
                        try {
                            //create and save comment
                            newComment = new _Comment.CommentModel.create({
                                comment: comment
                            });


                            response.status(201).json({ 'Success': "New comment created" });
                        } catch (error) {
                            response.status(500).json('Error occured while trying to create comment:', error);
                        }

                    case 4:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function createComment(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();