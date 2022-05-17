'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class users_organisation_mapping extends Model {
    static associate(models) {
      // this.belongsTo(models.user, { 
      //   foreignKey:"user_id",
      //   // as: "user"
      // });
      models.user.hasMany(models.users_organisation_mapping, { 
        foreignKey:"user_id",
        // as: "user"
      });
      // this.belongsTo(models.role, { 
      //   foreignKey:"user_id",
      //   // as: "user"
      // });
    }
  };
  users_organisation_mapping.init({
    role_name: DataTypes.STRING,
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'users_organisation_mapping',
    tableName: 'users_organisation_mappings'
  });
  return users_organisation_mapping;
};
