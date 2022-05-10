module.exports = function (sequelize, Sequelize) {
    return {
        users: require('./User')(sequelize, Sequelize),
    }
}