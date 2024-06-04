const express = require("express");

const userauthenticate = require("../middleware/auth");
const purchaseController = require("../controllers/purchase");

const router = express.Router();

router.get("/premiummembership", userauthenticate.authenticate, purchaseController.premiumMembership);

router.post("/updatetransactionstatus", userauthenticate.authenticate, purchaseController.updateTransactionStatus);

router.post("/failedtransactionstatus", userauthenticate.authenticate, purchaseController.failedTransactionStatus);

module.exports = router;