
var jwt = require('jsonwebtoken');
const UserList = require('../models/userSchema');

async function emailVerificationController(req,res){
    const {authorization}=req.headers;
    console.log(authorization);
    var decoded = jwt.verify(authorization, 'tanim');
    console.log(decoded.email);
    const updateUser= await UserList.findOneAndUpdate(
        {email:decoded.email},
        {verified:true},
        {new:true},
        )
        res.json(updateUser)
}




module.exports = emailVerificationController;