const express = require("express");
const router = express.Router();
const createSponsor = require("../../controllers/sponsorshipControllers/createSponsorship")

router.post("/", createSponsor.createSponsorship);

module.exports = router;