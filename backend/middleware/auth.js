const jwt = require('jsonwebtoken')
const users = require('../models/signUp')

exports.authenticate =async (req,res,next)=>{
    try {
        const token = req.header('Authorization');
        console.log(token);
        const user = jwt.verify(token,'secretkey');
        console.log(user);
        const id = user.userId
        console.log(id);
        const result = await users.findByPk(id);
        console.log(result);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found.' });
        }
            req.user = result;
            next();
    } catch (error) {
        return res.status(402).json({success:false})
    }
}