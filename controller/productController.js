const productSchema = require("../models/productSchema");
const userSchema = require("../models/userSchema")
async function secureProductUploadController(req, res, next) {
    // const headers = req.headers;
    // next();
    console.log(req.headers.authorization.split("@"));
    const userid = req.headers.authorization.split("@")[1];
    const password = req.headers.authorization.split("@")[2];

    console.log(password);
    console.log(userid);

    if (!req.headers.authorization) {
        res.json({ error: "authorization failed" });
    }

    const user = await userSchema.find({ _id: userid })

    if (user.length > 0) {
        if (password == "$rG002QU'8_K") {
            if (user[0].role == 'merchant') {
                next();
            }
             else {
                res.json({ error: "you are not able to create product" })
            }

        } else {
            res.json({ error: "incorrect your password" });
        }
    } else {
        res.json({ error: "you are not authorized" });
    }



}

function createProductController(req, res) {
    const { name, description, store } = req.body;
    console.log( name, description, store );


    console.log('create product');
//  const product= new productSchema({
//     name,
//     description,
//     image,
//     store
//  });
//  product.save();
//  res.json({ success: "protuct schema created........" });


}

module.exports = { secureProductUploadController, createProductController };