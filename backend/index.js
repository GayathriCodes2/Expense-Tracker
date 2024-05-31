//index.js
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const db = require('../backend/utils/db');
const addsignup = require('./router/signup');
const expenseRouter = require('./router/expense');
const users = require('./models/signUp');
const expense = require('./models/expense');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());
app.use(addsignup);
app.use(expenseRouter);
users.hasMany(expense);
expense.belongsTo(users);
db.sync().then(()=>{ 
    app.listen(9000,()=>console.log("Server Running"));
})
.catch(e=>console.log(e));   