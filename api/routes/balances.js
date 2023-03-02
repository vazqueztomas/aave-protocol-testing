const express = require("express");
const router = express.Router();
const balanceController = require("../controllers/balances");

router.get("/getUserBalance", balanceController.getUserBalance);

module.exports = router;
