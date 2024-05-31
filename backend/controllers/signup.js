//controller/signup.js
const signup = require('../models/signUp');
const bcrypt = require('bcrypt')
exports.addsignup = async (req, res) => {
    try {
        const { name, email, password } = req.body
        bcrypt.hash(password, 8, async (err, hash) => {
            const data = await signup.create({ name, email, password: hash })
            res.status(200).send({ message: 'User Registered Successfully', data: data });
        })
    } catch (e) {
        console.log(e);
        res.send({ message: e.message });
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body);
        const data = await signup.findOne({ where: { email: req.body.email } })
        console.log(">>>>>>>>>>>", data);
        if (data != null) {
            console.log(data.password === password);
            bcrypt.compare(password, data.password, (err, result) => {
                if (err) {
                    console.log("Error comparing passwords:", err);
                    return res.status(500).send({ success: false, message: "Something went wrong" });
                }
                if (result) {
                    return res.status(200).send({ success: true, message: "Login Successful", data:data });
                } else {
                    return res.status(404).send({ success: false, message: "Password incorrect" });
                }
            });
        } else {
            res.status(404).send({success:false, message: "Email does not exist" })
        }

    } catch (error) {
        res.status(400).send({success:false, message: " Email or password does not exist" })
        console.log(":::::::::::::", error);
    }
}