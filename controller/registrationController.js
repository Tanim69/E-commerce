
const bcrypt = require('bcrypt');
const userList = require("../models/userSchema");
const emailValidation = require("../helpers/emailValidation");
const sendEmail = require('../helpers/sendEmail');
const emailVerificationTemplate = require('../helpers/emailVerificationTemplate');
var jwt = require('jsonwebtoken');

async function registrationController (req,res){
    const { firstname, lastname, email, Telephone, addressOne, city, postcode, division, district, password, } = req.body;

    if (!firstname) {
        return res.json({ error: "firstname is required" })
    }
    if (!lastname) {
        return res.json({ error: "lastname is required" })
    }
    if (!email) {
        return res.status(400).json({ error: "email is required" })
    }

    if (!emailValidation(email)) {
        return res.json({ error: "Invalid Email address" })
    }

    // same email use korle err show
    const existingEmail = await userList.find({ email })
    if (existingEmail.length > 0) {
        return res.json({ error: "Email is already used" })
    }



    bcrypt.hash(password, 10, function (err, hash) {
        const users = new userList({

            firstname,
            lastname,
            email,
            Telephone,
            addressOne,
            city,
            postcode,
            division,
            district,
            password: hash

        })

        users.save()
        var token = jwt.sign({ email }, 'tanim');
        sendEmail(email,"Email verification", emailVerificationTemplate(token))
    });



    res.json(req.body);

}

module.exports = registrationController ;