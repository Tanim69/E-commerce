const express = require("express");
const becomemerchantController = require("../../controller/merchantController");
const router = express.Router();



router.post('/becomemerchant' ,becomemerchantController)


module.exports = router;