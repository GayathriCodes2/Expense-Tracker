const Sequelize = require('sequelize');
const db = require('../utils/db');

const expense = db.define('expense', {
   id:{
    type:Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey:true,
    allowNull:false
   },
   price:{
    type:Sequelize.INTEGER,
    allowNull:false
   },
   desc:{
    type:Sequelize.STRING,
    allowNull:false
   },
   category:{
    type:Sequelize.STRING,
    allowNull:false
   }
    
});

module.exports = expense;