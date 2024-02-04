const express = require("express");
const createcategoryController = require("../../controller/categoryController");
const router = express.Router();


router.post('/createcategory',createcategoryController)


module.exports = router;