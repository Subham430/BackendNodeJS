'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class role extends Model {  };
  role.init({
    role_name: DataTypes.STRING,
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'role',
    // tableName: 'roles'
  });
  return role;
};
