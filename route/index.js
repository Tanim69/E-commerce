const express = require("express")

const router = express.Router();
// const apiRoute=require('./api');

const apiRoute = require('./api')

// const apiRoute = require('../route/api/index')
router.use('/api/v1',apiRoute)


module.exports=router;