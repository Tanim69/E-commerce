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
    emaiverified:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        default:"user",
        enum:["user","admin","merchant"]
    },
    created:{
        type:Date,
        default:new Date()
      },
      updated:{
        type:Date
      }


})


module.exports = mongoose.model('UserList', userSchema)

