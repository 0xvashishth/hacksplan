const express = require("express");
const router = express.Router();
const getUser = require("../../controllers/userControllers/getUser");
const deleteUser = require("../../controllers/userControllers/deleteUser")
const updateUser = require("../../controllers/userControllers/updateUser")

// get user requests
router.get("/:id", getUser.getUserById);
router.post("/search", getUser.searchUser);

// update user requests
router.put("/email", updateUser.updateUserEmail);
router.put("/phone", updateUser.updateUserPhone);
router.put("/name", updateUser.updateUserName);
router.put("/password", updateUser.updateUserPassword);
router.put("/preference", updateUser.updateUserPreference);
router.put("/email/verify", updateUser.updateUserEmailVerification);
router.put("/phone/verify", updateUser.updateUserPhoneVerification);

// delete user requests
router.delete("/", deleteUser.deleteUser);
router.delete("/session", deleteUser.deleteSession);
router.delete("/sessions", deleteUser.deleteAllSession);

module.exports = router;