// external imports
const express = require("express");
const loginRouter = express.Router();

// internal imports
const { doLoginValidators, doLoginValidationHandler } = require("../middlewares/login/loginValidators");
const {login} = require("../controller/loginController");

// login page
loginRouter.post("/user", doLoginValidators, doLoginValidationHandler, login);

module.exports = loginRouter;