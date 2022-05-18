'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      // this.hasMany(models.users_organisation_mapping, { 
      //   foreignKey:"user_id",
      // });
      this.hasOne(models.users_organisation_mapping, { 
        foreignKey:"user_id",
      });
    }
    
  };
  user.init({
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
    modelName: 'user',
    tableName: 'users',
  });
  return user;
};
