require('dotenv').config();
const {Sequelize,DataTypes}=require('sequelize');

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, '',{
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    pool: {max:5, min:0, idle: 10000}
});

sequelize.authenticate()
.then(()=>{
    console.log("connected");
})
.catch(err =>{
    console.log( "Error"+err);
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.Users = require('../models/User.js')(sequelize, DataTypes)
// db.sequelize.sync ({ force: false })
// .then (() =>{
//      console.log('yes re-sync donel')
// })

const {
    user,role,users_organisation_mapping
} = require('../models/index')(sequelize, Sequelize);
// users.User.hasOne(task)

// const User = user.user;
// const Role = role.role;
// const Users_organisation_mapping = users_organisation_mapping.users_organisation_mapping;



module.exports = db;
// module.exports.Role = Role;
// module.exports.User = User;
// module.exports.Users_organisation_mapping = Users_organisation_mapping;



