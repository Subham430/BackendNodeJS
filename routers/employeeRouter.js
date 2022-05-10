const express = require('express');
const employeeRouter = express.Router();

// internal imports
const { addUserValidators, addUserValidationHandler} = require("../middlewares/employee/employeeValidator");
const { UserController } = require("../controller");

//user add
employeeRouter.post("/add", addUserValidators, addUserValidationHandler, UserController.addEmployee);
//user removal
employeeRouter.delete("/remove/:id", UserController.removeEmployee);

module.exports = employeeRouter;