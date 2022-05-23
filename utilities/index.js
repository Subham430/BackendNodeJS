const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.generateAccessToken = function (data, expiresIn = "3h") {
    return jwt.sign(data, process.env.TOKEN_SECRET, { expiresIn });
}

exports.varifyAccessToken = function (token = "", callback = () => {}) {
    console.log("varify token");
    jwt.verify(token, process.env.TOKEN_SECRET, callback)
}