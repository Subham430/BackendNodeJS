 // external imports
 const express = require("express");
 const loginRouter = express.Router();

  // internal imports
const {getLogin} = require("../controller/loginController");

 // login page
 loginRouter.get("/", getLogin);

 module.exports = loginRouter;