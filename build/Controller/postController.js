'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createPost = undefined;

var _Post = require('../Models/Post');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var createPost = exports.createPost = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, response, next) {
        var _request$body, text, pictures, userID, newPost;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        //Get the fields from the request body
                        _request$body = request.body, text = _request$body.text, pictures = _request$body.pictures, userID = _request$body.userID;

                        //check if the required field is empty

                        if (text) {
                            _context.next = 3;
                            break;
                        }

                        return _context.abrupt('return', response.status(400).json({ 'message': 'The text is required :)' }));

                    case 3:

                        //try to create the new post
                        try {
                            //create and save new post
                            newPost = new _Post.PostModel.create({
                                text: text,
                                pictures: pictures ? pictures : null
                            });


                            response.status(201).json({ 'Success': 'New post created' });
                        } catch (error) {
                            response.status(500).json('Error occured while trying to create post:', error);
                        }

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function createPost(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();