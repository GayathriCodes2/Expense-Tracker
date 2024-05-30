const sequelize = require('sequelize');
const db = require('../utils/db')
const signup = db.define('signup', {
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
    }
});

module.exports = signup;