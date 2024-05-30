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

exports.login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const data = await signup.findOne({where:{email:email}})
        console.log(">>>>>>>>>>>",data);
        if(data!=null){
            console.log(data.password===password);
        if(data.password===password){
            res.status(200).send({message:"Login Successfull"})
        }else{
            res.status(200).send({message:"password incorrect"})
        }
    }else{
        res.status(400).send({message:"Email does not exist"})
    }

    } catch (error) {
        res.status(400).send({message:"Email or password does not exist"})
        console.log(":::::::::::::",error);
    }
}