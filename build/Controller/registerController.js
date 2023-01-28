'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.signUp = undefined;

var _User = require('../Models/User');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var signUp = exports.signUp = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, response, next) {
        var _request$body, firstName, lastName, emailAdress, password, userProfilePicture, emailMatch, newUser;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        //Get the fields from the request body
                        _request$body = request.body, firstName = _request$body.firstName, lastName = _request$body.lastName, emailAdress = _request$body.emailAdress, password = _request$body.password, userProfilePicture = _request$body.userProfilePicture;

                        //Check if the required fields are empty

                        if (!(!firstName || !lastName || !emailAdress || !password)) {
                            _context.next = 3;
                            break;
                        }

                        return _context.abrupt('return', response.status(400).json({ 'message': 'The following fields are required: first name, last name, email, and password :)' }));

                    case 3:
                        _context.next = 5;
                        return _User.UserModel.findOne({ email: emailAdress }).exec();

                    case 5:
                        emailMatch = _context.sent;

                        if (!emailMatch) {
                            _context.next = 8;
                            break;
                        }

                        return _context.abrupt('return', response.status(409).json({ 'message': 'Email already exists' }));

                    case 8:

                        //try to create the new user
                        try {

                            //CREATE NEW USER
                            // const newUser = new UserModel({
                            //     firstName: firstName,
                            //     lastName: lastName,
                            //     email: emailAdress,
                            //     password: password,
                            //     profilePicture: userProfilePicture ? userProfilePicture : null
                            // });

                            // //THEN SAVE THE NEW USER
                            // await newUser.save();


                            //OR create and save the new user once
                            newUser = new _User.UserModel.create({
                                firstName: firstName,
                                lastName: lastName,
                                email: emailAdress,
                                password: password,
                                profilePicture: userProfilePicture ? userProfilePicture : null
                            });


                            response.status(201).json({ 'Success': 'New user ' + firstName + ' created' });
                        } catch (error) {
                            response.status(500).json('Error occured while trying to create account:', error);
                        }

                    case 9:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function signUp(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();