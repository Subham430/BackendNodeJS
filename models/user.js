'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      this.hasOne(models.users_organisation_mapping, { 
        foreignKey:"user_id",
      });
      // this.hasOne(models.role,{ 
      //   through:"users_organisation_mappings",
      //   foreignKey:"user_id",
      //   otherKey:"role_id" 
      // })
    }

    toJSON() {
      return { ...this.get(), password: undefined, deletedAt:undefined}
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
