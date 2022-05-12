'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class users_organisation_mapping extends Model {  };
  users_organisation_mapping.init({
    role_name: DataTypes.STRING,
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'users_organisation_mapping',
  });
  return users_organisation_mapping;
};
