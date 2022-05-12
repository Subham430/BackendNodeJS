module.exports = function (sequelize, Sequelize) {
    return {
        users: require('./user')(sequelize, Sequelize),
    }
}