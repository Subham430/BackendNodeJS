const express = require('express');
const employeeRouter = express.Router();

// internal imports
const { addUserValidators, addUserValidationHandler} = require("../../middlewares/employee/employeeValidator");
const { UserController } = require("../../controller");

//user details
employeeRouter.get("/details/:id", UserController.getEmployee);
//users details
employeeRouter.get("/details", UserController.getEmployeesDetails);
//user add
employeeRouter.post("/add", addUserValidators, addUserValidationHandler, UserController.addEmployee);
//user removal
employeeRouter.delete("/remove/:id", UserController.removeEmployee);
//user restore
employeeRouter.get("/restore/:id", UserController.restoreEmployee);

module.exports = employeeRouter;