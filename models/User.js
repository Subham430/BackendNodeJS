'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {  };
  User.init({
    user_name: DataTypes.STRING,
    company_name: DataTypes.STRING,
    email: { 
        type: DataTypes.STRING,
        unique: true
    },
    password: DataTypes.STRING
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};
