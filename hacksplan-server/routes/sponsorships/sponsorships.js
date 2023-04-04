const express = require("express");
const router = express.Router();
const createSponsor = require("../../controllers/sponsorshipControllers/createSponsorship");
const getSponsorship = require("../../controllers/sponsorshipControllers/getSponsorship");
const updateDocument = require("../../controllers/sponsorshipControllers/updateSponsorship");
const deleteSponsorship = require("../../controllers/sponsorshipControllers/deleteSponsorship");

router.post("/", createSponsor.createSponsorship);
router.get("/:id", getSponsorship.getSponsorship);
router.put("/", updateDocument.updateDocument);
router.delete("/:id", deleteSponsorship.deleteSponsorship);
router.post("/search", getSponsorship.searchSponsorship)

module.exports = router;
