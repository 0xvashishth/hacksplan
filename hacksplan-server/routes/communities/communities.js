const express = require("express");
const router = express.Router();
const createCommunity = require("../../controllers/communityControllers/createCommunity");
const getCommunity = require("../../controllers/communityControllers/getCommunity");
const updateCommunity = require("../../controllers/communityControllers/updateCommunity");
const deleteCommunity = require("../../controllers/communityControllers/deleteCommunity");

router.post("/", createCommunity.createCommunity);
router.get("/:id", getCommunity.getCommunity);
router.put("/", updateCommunity.updateCommunity);
router.delete("/:id", deleteCommunity.deleteCommunity);
router.post("/search", getCommunity.searchCommunity);

module.exports = router;
