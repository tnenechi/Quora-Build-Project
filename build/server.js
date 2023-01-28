'use strict';

var _dotenv = require('dotenv');

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _db = require('./Config/db.config');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _Register = require('./Routes/Register');

var _Register2 = _interopRequireDefault(_Register);

var _Post = require('./Routes/Post');

var _Post2 = _interopRequireDefault(_Post);

var _Comment = require('./Routes/Comment');

var _Comment2 = _interopRequireDefault(_Comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _dotenv.config)();

var app = (0, _express2.default)();
var PORT = process.env.PORT || 5678;

//Connect to MongoDB
(0, _db.connectDB)();

//Routes
app.use(_Register2.default);
app.use(_Post2.default);
app.use(_Comment2.default);

//Only listen after the app connects to MongoDB
_mongoose2.default.connection.once('open', function () {
    console.log('Connected to MongoDB');

    app.listen(PORT, function () {
        console.log('Server started on PORT ' + PORT);
    });
});