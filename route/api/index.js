const express = require("express")

const router = express.Router();

const authenticationRoute = require('./authentication');
const categoryRoute= require('./category')
const merchantRoute= require('./merchant')

router.use('/authentication',authenticationRoute)
router.use('/category',categoryRoute)
router.use('/merchant',merchantRoute)


module.exports=router;