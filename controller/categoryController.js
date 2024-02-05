const CategoryList = require("../models/categorySchema");
const SubCategoryList = require("../models/subCategorySchema");


async function createCategoryController(req, res) {
    const { name, description } = req.body;

    const duplicateCategory = await CategoryList.find({name});
    if (duplicateCategory.length > 0) {
        return res.json({ error: "Category is already exist" })
    }

    const category = new CategoryList({
        name,
        description,
    })
    category.save()
    res.send({success:"category created successfully done"})

}

// category done 


// sub category start

async function createSubCategoryController(req, res) {
    const { name, description,category } = req.body;

    const duplicateSubCategory = await SubCategoryList.find({name});
    if (duplicateSubCategory.length > 0) {
        return res.json({ error: "SubCategory is already exist" })
    }

    const SubCategory = new SubCategoryList({
        name,
        description,
        category
    })
    SubCategory.save()
    res.send({success:"SubCategory created successfully done"})

}






module.exports = {createCategoryController,createSubCategoryController};