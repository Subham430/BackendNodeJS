// external imports
// const bcrypt = require("bcrypt");

// internal imports
// const {User} = require("../models/User");
const { sequelize } = require("../config/server"),
    { User } = sequelize.models,
    bcrypt = require("bcrypt");

// const { UserModel } = require("../models");
// var jwt = require('jsonwebtoken');
// const { User } = require('../config/server');

// get users page
async function getEmployee(req, res, next) {
  try {
    const users = await User.find();
    res.status(200).json({
            message: "User was added successfully!",
            data: users,
        });
    } catch (err) {
        next(err);
    }
}

// add user
async function addEmployee(request, res, next) {
  const hashedPassword = await bcrypt.hash(request.body.password, 10);
  
  try{
    await User.create({
      user_name: request.body.user_name,
      company_name: request.body.company_name,
      email: request.body.email,
      password: hashedPassword
    }).then(function (User) {
      if (User) {
        res.status(201).json({
            message: "User was added successfully!",
            data: User,
        });
      } else {
          response.status(400).json({
            message: 'Error in insert new record'
          });
      }
    });  
  } catch (err) {
      res.status(500).json({
        errors: {
          common: {
            msg: "Unknown error occured!",
            error: err
          },
        },
      });
  }
    // newUser = new User({
    //   ...request.body,
    //   password: hashedPassword,
    // });

    // save user or send error
    // try {
    //     const result = await newUser.save();
    //     res.status(201).json({
    //         message: "User was added successfully!",
    //         data: newUser,
    //     });
    // } catch (err) {
    //     res.status(500).json({
    //         errors: {
    //             common: {
    //                 msg: "Unknown error occured!",
    //             },
    //         },
    //     });
    // }
}

// remove user
async function removeEmployee(req, res, next) {
  try {
    const user = await User.findByIdAndDelete({
      _id: req.params.id,
    });

    res.status(200).json({
      message: "User was removed successfully!",
    });
  } catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: "Could not delete the user!",
        },
      },
    });
  }
}

//test
// get users page
async function employee(req, res, next) {
  res.status(200).json({
    message: "User was added successfully!",
  });
}


module.exports = {
  getEmployee,
  addEmployee,
  removeEmployee,
  employee
};