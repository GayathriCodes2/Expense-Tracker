//controller/signup.js
const signup = require('../models/signUp');

exports.addsignup = async (req, res) => {
    try {
        console.log("/////////////////", req.body);
        const data = await signup.create(req.body)
        res.status(200).send({ message: 'Signup successful', data: data });
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
            if (data.password === password) {
                res.status(200).send({ message: "Login Successfull" })
            } else {
                //password incorrect
                res.status(404).send({ message: "Error" })
            }
        } else {
            //Email does not exist
            res.status(404).send({ message: "Error" })
        }

    } catch (error) {
        // Email or password does not exist
        res.status(400).send({ message: "Error" })
        console.log(":::::::::::::", error);
    }
}