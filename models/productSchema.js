const mongoose = require('mongoose');
const { Schema } = mongoose;


const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image:{
        type:String,
        required:true
    },
    store: {
        type: Schema.Types.ObjectId,
        ref: "store",
    },
    created: {
        type: Date,
        default: new Date()
    },
    updated: {
        type: Date
    },
})
module.exports= mongoose.model("Product",productSchema)