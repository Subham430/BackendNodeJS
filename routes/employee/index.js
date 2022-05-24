const express = require('express');
const employeeRouter = express.Router();

// internal imports
const { addUserValidators, addUserValidationHandler} = require("../../middlewares/employee/employeeValidator");
const { updateUserValidators, updateUserValidationHandler} = require("../../middlewares/employee/employeeUpdateValidator");
const { UserController } = require("../../controller");

/**
 * @swagger
 *   tags:
 *     name: Employee
*/

/**
 * @swagger
 * /swastik/employee/details/{id}:
 *   get:
 *     tags: [Employee]
 *     summary: Get a particular Employee
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the employee to retrieve.
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
 * /swastik/employee/details:
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

/**
 * @swagger
 * /swastik/employee/add:
 *   post:
 *     tags: [Employee]
 *     summary: Create Employee
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_name:
 *                 type: string
 *                 example: "Subham Dutta"
 *               email:
 *                 type: string
 *                 example: "subham@gmail.com"
 *               company_name:
 *                 type: string
 *                 example: "Swastik"
 *               password:
 *                 type: string
 *                 example: "Password@420"
 *     responses:
 *       200:
 *         description: Created employee.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */


//user add
employeeRouter.post("/add", addUserValidators, addUserValidationHandler, UserController.addEmployee);

/**
 * @swagger
 * /swastik/employee/update:
 *   post:
 *     tags: [Employee]
 *     summary: update Employee
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_name:
 *                 type: string
 *                 example: "Subham Dutta"
 *               email:
 *                 type: string
 *                 example: "subham@gmail.com"
 *               company_name:
 *                 type: string
 *                 example: "Swastik"
 *               password:
 *                 type: string
 *                 example: "Password@420"
 *     responses:
 *       200:
 *         description: update employee.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */

//user update
employeeRouter.post("/update", updateUserValidators, updateUserValidationHandler, UserController.updateEmployee);

/**
 * @swagger
 * /swastik/employee/remove/{id}:
 *   get:
 *     tags: [Employee]
 *     summary: remove a particular Employee
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the employee to remove.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: remove the Employee.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */


//user removal
employeeRouter.delete("/remove/:id", UserController.removeEmployee);

/**
 * @swagger
 * /swastik/employee/restore/{id}:
 *   get:
 *     tags: [Employee]
 *     summary: Get a particular Employee restored
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the employee to restore.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Details of the Employee restored.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
//user restore
employeeRouter.get("/restore/:id", UserController.restoreEmployee);

module.exports = employeeRouter;