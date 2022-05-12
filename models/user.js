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
      console.log("hello");
      this.hasOne(models.role, { through: 'users_organisation_mappings', foreignKey:"user_id", otherKey:"role_id" , as:"userRole"});
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
  });
  return user;
};
