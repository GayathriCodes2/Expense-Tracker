//index.js
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const db = require('../backend/utils/db');
const addsignup = require('./router/signup');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());

app.use(addsignup)

db.sync({force:true}).then(()=>{
    app.listen(9000,()=>console.log("Server Running"));
})
.catch(e=>console.log(e));  