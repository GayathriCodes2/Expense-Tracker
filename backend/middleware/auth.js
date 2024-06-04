const jwt = require('jsonwebtoken')
const users = require('../models/signUp')

exports.authenticate =async (req,res,next)=>{
    try {
        const token = req.header('Authorization');
        const user = jwt.verify(token,'secretkey');
        const id = user.userId
        const result = await users.findByPk(id);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found.' });
        }
            req.user = result;
            next();
    } catch (error) {
        return res.status(402).json({success:false})
    }
}