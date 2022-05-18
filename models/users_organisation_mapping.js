'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class users_organisation_mapping extends Model {
    static associate(models) {
      
      // this.hasMany(models.users_organisation_mapping, { 
      //   foreignKey:"user_id",
      // });
      // this.hasOne(models.user, { 
      //   foreignKey:"user_id",
      // });
      // this.belongsTo(models.user, { 
      //     foreignKey:"user_id",
      //   });
      
    }
  };
  users_organisation_mapping.init({
    user_id: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER,
    company_id: DataTypes.INTEGER,
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'users_organisation_mapping',
    tableName: 'users_organisation_mappings'
  });
  return users_organisation_mapping;
};
