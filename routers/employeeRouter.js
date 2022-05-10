const express = require('express');
const employeeRouter = express.Router();

// internal imports
const { addUserValidators, addUserValidationHandler} = require("../middlewares/employee/employeeValidator");
// const {addEmployee, employee} = require("../controller/userController");
const { UserController } = require("../controller");

// login page
employeeRouter.post("/add", UserController.addEmployee);
// employeeRouter.get("/", employee);


module.exports = employeeRouter;