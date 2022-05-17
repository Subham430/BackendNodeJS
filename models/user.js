'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      // define association here
      // this.hasOne(models.role, { 
      //   through: models.user_origanisation_mapping, 
      //   foreignKey:"user_id", 
      //   otherKey:"role_id" , 
      //   as:"userRole"
      // });
      user.hasOne('roles', {
        through: 'users_organisation_mappings',
        foreignKey:"user_id", 
        sourceKey: "role_id",
        as:"users_organisation_mapping"
      });
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
