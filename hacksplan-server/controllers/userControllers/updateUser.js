const appwrite = require("../../appwrite/appwrite-config");
const { ID, Query } = require("node-appwrite");

const updateUserName = async (req, res, next) => {
  const { id, name } = req.body;

  if (!id || !name) {
    return res.status(422).json({ error: "Bad Request!" });
  }

  try {
    appwrite.users.updateName(id, name).then(
      function (response) {
        console.log(response);
        var user = {};
        user.id = response.$id;
        user.name = response.name;
        user.email = response.email;
        user.registration = response.registration;
        user.verification = response.emailVerification;
        user.preference = response.prefs;
        return res.status(200).send({ message: "Name updated successfully!" });
      },
      function (error) {
        console.log(error.response.message);
        return res.status(500).json({ error: error.response.message });
      }
    );
  } catch (err) {
    console.log(err);
  }
};

const updateUserPassword = async (req, res, next) => {
  const { id, password } = req.body;

  if (!id || !password) {
    return res.status(422).json({ error: "Bad Request!" });
  }

  try {
    appwrite.users.updatePassword(id, password).then(
      function (response) {
        console.log(response);
        var user = {};
        user.id = response.$id;
        user.name = response.name;
        user.email = response.email;
        user.registration = response.registration;
        user.verification = response.emailVerification;
        user.preference = response.prefs;
        return res
          .status(200)
          .send({ message: "Password updated successfully!" });
      },
      function (error) {
        console.log(error.response.message);
        return res.status(500).json({ error: error.response.message });
      }
    );
  } catch (err) {
    console.log(err);
  }
};

const updateUserEmail = async (req, res, next) => {
  const { id, email } = req.body;

  if (!id || !email) {
    return res.status(422).json({ error: "Bad Request!" });
  }

  try {
    appwrite.users.updateEmail(id, email).then(
      function (response) {
        console.log(response);
        var user = {};
        user.id = response.$id;
        user.name = response.name;
        user.email = response.email;
        user.registration = response.registration;
        user.verification = response.emailVerification;
        user.preference = response.prefs;
        return res.status(200).send({ message: "Email updated successfully!" });
      },
      function (error) {
        console.log(error.response.message);
        return res.status(500).json({ error: error.response.message });
      }
    );
  } catch (err) {
    console.log(err);
  }
};

const updateUserPhone = async (req, res, next) => {
  const { id, phone } = req.body;

  if (!id || !phone) {
    return res.status(422).json({ error: "Bad Request!" });
  }

  try {
    appwrite.users.updatePhone(id, phone).then(
      function (response) {
        console.log(response);
        var user = {};
        user.id = response.$id;
        user.name = response.name;
        user.email = response.email;
        user.registration = response.registration;
        user.verification = response.emailVerification;
        user.preference = response.prefs;
        return res.status(200).send({ message: "Phone updated successfully!" });
      },
      function (error) {
        console.log(error.response.message);
        return res.status(500).json({ error: error.response.message });
      }
    );
  } catch (err) {
    console.log(err);
  }
};

const updateUserEmailVerification = async (req, res, next) => {
  const { id, status } = req.body;

  if (!id || !status) {
    return res.status(422).json({ error: "Bad Request!" });
  }

  try {
    appwrite.users.updateEmailVerification(id, status).then(
      function (response) {
        console.log(response);
        var user = {};
        user.id = response.$id;
        user.name = response.name;
        user.email = response.email;
        user.registration = response.registration;
        user.verification = response.emailVerification;
        user.preference = response.prefs;
        return res
          .status(200)
          .send({ message: "Email Verification updated successfully!" });
      },
      function (error) {
        console.log(error.response.message);
        return res.status(500).json({ error: error.response.message });
      }
    );
  } catch (err) {
    console.log(err);
  }
};

const updateUserPhoneVerification = async (req, res, next) => {
  const { id, status } = req.body;

  if (!id || !status) {
    return res.status(422).json({ error: "Bad Request!" });
  }

  try {
    appwrite.users.updatePhoneVerification(id, status).then(
      function (response) {
        console.log(response);
        var user = {};
        user.id = response.$id;
        user.name = response.name;
        user.email = response.email;
        user.registration = response.registration;
        user.verification = response.emailVerification;
        user.preference = response.prefs;
        return res
          .status(200)
          .send({ message: "Phone Verification updated successfully!" });
      },
      function (error) {
        console.log(error.response.message);
        return res.status(500).json({ error: error.response.message });
      }
    );
  } catch (err) {
    console.log(err);
  }
};

const updateUserStatus = async (req, res, next) => {
  const { id, status } = req.body;

  if (!id || !status) {
    return res.status(422).json({ error: "Bad Request!" });
  }

  try {
    appwrite.users.updateStatus(id, status).then(
      function (response) {
        console.log(response);
        var user = {};
        user.id = response.$id;
        user.name = response.name;
        user.email = response.email;
        user.registration = response.registration;
        user.verification = response.emailVerification;
        user.preference = response.prefs;
        return res
          .status(200)
          .send({ message: "User Status updated successfully!" });
      },
      function (error) {
        console.log(error.response.message);
        return res.status(500).json({ error: error.response.message });
      }
    );
  } catch (err) {
    console.log(err);
  }
};

const updateUserPreference = async (req, res, next) => {
  // extra should be key value pair object
  const { id, extra } = req.body;

  if (!id || !extra) {
    return res.status(422).json({ error: "Bad Request!" });
  }

  try {
    appwrite.users.updateStatus(id, extra).then(
      function (response) {
        console.log(response);
        var user = {};
        user.id = response.$id;
        user.name = response.name;
        user.email = response.email;
        user.registration = response.registration;
        user.verification = response.emailVerification;
        user.preference = response.prefs;
        return res
          .status(200)
          .send({ message: "User Preference updated successfully!" });
      },
      function (error) {
        console.log(error.response.message);
        return res.status(500).json({ error: error.response.message });
      }
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  updateUserPreference,
  updateUserEmail,
  updateUserEmailVerification,
  updateUserName,
  updateUserPassword,
  updateUserPhoneVerification,
  updateUserStatus,
  updateUserPhone,
};
