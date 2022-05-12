module.exports = function (sequelize, Sequelize) {
    return {
        user: require('./user')(sequelize, Sequelize),
        role: require('./role')(sequelize, Sequelize),
        users_organisation_mapping: require('./users_organisation_mapping')(sequelize, Sequelize)
    }
}