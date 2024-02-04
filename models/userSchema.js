const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({


    firstname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    Telephone: String,
    addressOne: String,
    city: String,
    postcode: String,
    division: String,
    district: String,
    password: String,
    verified:{
        type:Boolean,
        default:false
    }


})


module.exports = mongoose.model('UserList', userSchema)

