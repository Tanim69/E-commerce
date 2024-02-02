const emailValidation = require("../helpers/emailValidation");
const bcrypt = require('bcrypt');
const UserList = require('../models/userSchema')
async function loginController(req,res) {


    const { email, password } = req.body;


    if (!email) {
        return res.status(400).json({ error: "email is required" })
    }

    if (!emailValidation(email)) {
        return res.json({ error: "Invalid Email address" })
    }
    if (!password) {
        return res.status(400).json({ error: "password is required" })
    }

    const existingEmail = await UserList.find({ email })
    if (existingEmail.length > 0) {
        bcrypt.compare(password, existingEmail[0].password).then(function(result) {
            // result == true
            if (result){
                res.json({success: 'Login Successful'})
            } else{
                res.json({error:'password not match'})
            }
        });
    }




}

module.exports = loginController;