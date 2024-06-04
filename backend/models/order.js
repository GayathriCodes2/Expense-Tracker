const sequelize = require('sequelize');
const db = require('../utils/db');

const Order = db.define('order',{
    id:{
    type:sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
    },
    paymentid:sequelize.STRING,
    orderid:sequelize.STRING,
    status:sequelize.STRING
})

module.exports = Order