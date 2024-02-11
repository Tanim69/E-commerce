const express = require("express");
const {createCategoryController,createSubCategoryController,createCategoryStatusController,createSubCategoryStatusController} = require("../../controller/categoryController");
const router = express.Router();


router.post('/createcategory',createCategoryController)
router.post('/createcategorystatus',createCategoryStatusController)
router.post('/createsubcategorystatus',createSubCategoryStatusController)
router.post('/createsubcategory',createSubCategoryController)


module.exports = router;