const express = require("express");
const router = express.Router();
const appwrite = require("../../appwrite/appwrite-config");
const { ID } = require("node-appwrite");

router.post("/signup", async (req, res) => {
  const { name, email, phone, password } = req.body;

  if (!name || !email || !phone || !password) {
    return res.status(422).json({ error: "Please Fill the properties" });
  }

  try {
    appwrite.users.create(ID.unique(), email, phone, password, name).then(
      function (response) {
        console.log(response);
        return res.status(200).send({ response });
      },
      function (error) {
        console.log(error.response.message);
        return res.status(500).json({ error: error.response.message });
      }
    );
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ error: "Please Fill the properties" });
  }

  try {
    return res.status(200).send({ response });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
