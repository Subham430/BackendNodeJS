'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      // define association here
      // this.belongsTo(models.role, { through: 'users_organisation_mappings', foreignKey:"user_id", otherKey:"role_id" , as:"userRole"});
    }

    toJSON() {
      return { ...this.get(), password: undefined, deletedAt:undefined}
    }
  };
  role.init({
    role_name: DataTypes.STRING,
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'role',
    tableName: 'roles'
  });
  return role;
};
