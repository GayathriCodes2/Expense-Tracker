//controller/signup.js
const signup = require('../models/signUp');

exports.addsignup = async(req,res)=>{
    try{
    console.log("/////////////////",req.body);
    const data = await signup.create(req.body)
    res.status(200).send({message: 'Signup successful',data:data});
    }catch(e){
        console.log(e);
        res.send({message: e.message});
    }
}