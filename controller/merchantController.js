
const MerchantList = require("../models/merchantSchema");
const UserList = require("../models/userSchema");

async function becomemerchantController(req, res) {


    const { storename, officialemail, officialphone, address, owner, products } = req.body;

    const merchant = new MerchantList({
        storename,
        officialemail,
        officialphone,
        address,
        owner,
        products
    });

    merchant.save();
   await UserList.findByIdAndUpdate(
        {_id:"owner"},
        {role:"merchant"},
        {new:true}
    )
    res.json({success:'congratulations, you are a become merchanrt'})



}


module.exports = becomemerchantController;