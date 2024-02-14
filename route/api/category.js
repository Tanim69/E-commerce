const express = require("express");
const {createCategoryController,createSubCategoryController,createCategoryStatusController,createSubCategoryStatusController,getAllCategoryController,getAllSubCategoryController} = require("../../controller/categoryController");
const router = express.Router();


router.post('/createcategory',createCategoryController)
router.post('/createcategorystatus',createCategoryStatusController)
router.post('/createsubcategorystatus',createSubCategoryStatusController)
router.post('/createsubcategory',createSubCategoryController)

router.get('/getallcategory',getAllCategoryController)
router.get('/getallsubcategory',getAllSubCategoryController)

module.exports = router;