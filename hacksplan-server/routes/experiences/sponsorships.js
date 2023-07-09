const express = require("express");
const router = express.Router();
const createExperience = require("../../controllers/experienceControllers/createExperience");
const deleteExperience = require("../../controllers/experienceControllers/deleteExperience");
const getExperience = require("../../controllers/experienceControllers/getExperience");
const updateExperience = require("../../controllers/experienceControllers/updateExperience");

router.post("/", createExperience.createExperience);
router.get("/:id", getExperience.getExperience);
router.put("/", updateExperience.updateExperience);
router.delete("/:id", deleteExperience.deleteExperience);
router.post("/search", getExperience.searchExperience);

module.exports = router;
