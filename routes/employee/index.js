const express = require('express');
const employeeRouter = express.Router();

// internal imports
const { addUserValidators, addUserValidationHandler} = require("../../middlewares/employee/employeeValidator");
const { UserController } = require("../../controller");

/**
 * @swagger
 *   tags:
 *     name: Employee
*/

/**
 * @swagger
 * /employee/details/{id}:
 *   get:
 *     tags: [Employee]
 *     summary: Get a particular Employee
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the post to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Details of the Employee.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */

//user details
employeeRouter.get("/details/:id", UserController.getEmployee);

/**
 * @swagger
 * /employee/details:
 *   get:
 *     tags: [Employee]
 *     summary: Get all employees
 *     responses:
 *       200:
 *         description: A list of employees.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */

//users details
employeeRouter.get("/details", UserController.getEmployeesDetails);

//user add
employeeRouter.post("/add", addUserValidators, addUserValidationHandler, UserController.addEmployee);
//user removal
employeeRouter.delete("/remove/:id", UserController.removeEmployee);
//user restore
employeeRouter.get("/restore/:id", UserController.restoreEmployee);

module.exports = employeeRouter;