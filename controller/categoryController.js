const CategoryList = require("../models/categorySchema");


function createcategoryController(req, res) {
    const { name, description } = req.body;

    const category = new CategoryList({
        name,
        description,
    })
    category.save()
    res.send({success:"category created successfully done"})



}

module.exports = createcategoryController;