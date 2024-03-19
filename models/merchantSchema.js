const mongoose = require('mongoose');
const { Schema } = mongoose;

const storeSchema = new Schema({

    storename:{
        type:String,
        require:true
    },
    officialemail:{
        type:String,
        require:true
    },
    officialphone:{
        type:String,
        require:true

    },
    address:{
        type:String,
        require:true
    },

    owner:{
        type:Schema.Types.ObjectId,
        ref:"UserList"
    },


    products:[{
        type:Schema.Types.ObjectId,
        ref:"products",
    }],
    created: {
        type: Date,
        default: new Date()
    },
    updated: {
        type: Date
    }

});


module.exports= mongoose.model("store",storeSchema)