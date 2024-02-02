const mongoose = require('mongoose');
function dbConnection (){
    mongoose.connect('mongodb+srv://tanim17203099:tanim17203099@cluster0.lltkjt2.mongodb.net/ecommerce?retryWrites=true&w=majority')
    .then(() => console.log('Connected!'));
    


}

module.exports= dbConnection;