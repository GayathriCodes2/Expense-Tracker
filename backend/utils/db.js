const sequelize = require('sequelize');

const db = new sequelize('expense-tracker','root','',{dialect:'mysql',host:'localhost'});

module.exports = db; 