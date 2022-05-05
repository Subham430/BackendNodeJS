require('dotenv').config();
const Sequelize=require('sequelize');

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

module.exports = db;