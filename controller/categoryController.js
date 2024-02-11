const CategoryList = require("../models/categorySchema");
const SubCategoryList = require("../models/subCategorySchema");


async function createCategoryController(req, res) {
    const { name, description } = req.body;

    const duplicateCategory = await CategoryList.find({ name });
    if (duplicateCategory.length > 0) {
        return res.json({ error: "Category is already exist" })
    }

    const category = new CategoryList({
        name,
        description,
    })
    category.save()
    res.send({ success: "category created successfully done" })

}

// createcategory status controller

async function createCategoryStatusController(req, res) {

    const { name, status } = req.body
    if (status == 'rejected' || 'waiting') {
        const updateCategoryStatus = await CategoryList.findOneAndUpdate(
            { name },
            { $set: { isActive: false, status: status } },
            { new: true }
        )
        res.json({ success: "category status updated" })
    } else if (status == "approved") {
        const updateCategoryStatus = await CategoryList.findOneAndUpdate(
            { name },
            { $set: { isActive: true, status: status } },
            { new: true }
        )
        res.json({ success: "category status updated" })
    }



}



// sub category start

async function createSubCategoryController(req, res) {
    const { name, description, category } = req.body;

    const duplicateSubCategory = await SubCategoryList.find({ name });
    if (duplicateSubCategory.length > 0) {
        return res.json({ error: "SubCategory is already exist" })
    }

    const subcategory = new SubCategoryList({
        name,
        description,
        category
    })
    
    await CategoryList.findOneAndUpdate(
        { _id: subcategory.category},
        {$push:{ subcategory: subcategory._id}},
        { new: true }
        )
        subcategory.save();
    res.send({ success: "SubCategory created successfully done" })

}




// createsubcategory status controller start

async function createSubCategoryStatusController(req, res) {

    const { name, status } = req.body
    if (status == 'rejected' || 'waiting') {
        const updateSubCategoryStatus = await SubCategoryList.findOneAndUpdate(
            { name },
            { $set: { isActive: false, status: status } },
            { new: true }
        )
        res.json({ success: "sub category status updated" })
    } else if (status == "approved") {
        const updateSubCategoryStatus = await SubCategoryList.findOneAndUpdate(
            { name },
            { $set: { isActive: true, status: status } },
            { new: true }
        )
        res.json({ success: "sub category status updated" })
    }



}


module.exports = { createCategoryController, createSubCategoryController, createCategoryStatusController, createSubCategoryStatusController, };