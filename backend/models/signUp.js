const sequelize = require('sequelize');
const db = require('../utils/db')
const users = db.define('user', {
    id:{
        type:sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    name:{
        type:sequelize.STRING,
        allowNull:false
    },
    email:{
        type:sequelize.STRING,
        unique:true,
        allowNull:false
    },
    password:{
        type:sequelize.STRING,
        allowNull:false
    },
    isPremiumUser: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    }
});

module.exports = users;