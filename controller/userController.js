// external imports
// const { sequelize } = require("../config/server"),
//     { user, role } = sequelize.models,
//     bcrypt = require("bcrypt");
const User = require('../models').user;
const Role = require('../models').role;
const User_origanisation_mapping = require('../models').user_origanisation_mapping;

const bcrypt = require("bcrypt");


// get user details
async function getEmployee(req, res, next) {
  try {
    console.log("entry");
    const user_details = await User.findOne({ 
      where: {
        id: req.params.id
      },
      include: [
        { 
          model: User_origanisation_mapping, 
          // where:{ user_id : req.params.id},
          attributes:[
          ]
        },
      ],
      
    });
    res.status(200).json({
      message: "User details",
      data: user_details,
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
}

// get users details
async function getEmployeesDetails(req, res, next) {
  try {
    const users = await User.findAll();
    res.status(200).json({
      message: "User details",
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
}

// remove user
async function removeEmployee(req, res, next) {

  try{
    await User.destroy({
      where: {
          id: req.params.id
      }
    })
    .then(function (deletedRecord) {
      if(deletedRecord === 1){
          res.status(200).json({message:"Deleted successfully"});          
      }
      else
      {
          res.status(404).json({message:"record not found"})
      }
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  }catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: "Unknown error occured!",
          error: err
        },
      },
    });
  }
}

// restore user
async function restoreEmployee(req, res, next) {

  try{
    await User.restore({
      where: {
          id: req.params.id
      }
    }).then(function (restoreRecord) {
      if(restoreRecord === 1){
          res.status(200).json({message:"restore successfully"});          
      }
      else
      {
          res.status(404).json({message:"record not found"})
      }
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  }catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: "Unknown error occured!",
          error: err
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
  getEmployeesDetails,
  addEmployee,
  removeEmployee,
  restoreEmployee,
  employee
};