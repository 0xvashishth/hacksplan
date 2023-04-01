const appwrite = require("../../appwrite/appwrite-config");
const { ID, Query } = require("node-appwrite");

const getUserById = async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.status(422).json({ error: "Id is not recognized!" });
  }

  try {
    appwrite.users.get(id).then(
      function (response) {
        console.log(response);
        var user = {};
        user.id = id;
        user.name = response.name;
        user.email = response.email;
        user.registration = response.registration;
        user.verification = response.emailVerification;
        user.preference = response.prefs;
        return res.status(200).send({ user });
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

const searchUser = async (req, res, next) => {
  const { query } = req.body;
  if (!query) {
    return res.status(422).json({ error: "Id is not recognized!" });
  }
  try {
    // we can provide additional queries if we have any...
    appwrite.users.list([], query).then(
      function (response) {
        var users = [];
        for (let index = 0; index < response.total; index++) {
          users[index] = {};
          users[index].id = response.users[index].$id;
          users[index].name = response.users[index].name;
          users[index].email = response.users[index].email;
          users[index].registration = response.users[index].registration;
          users[index].verification = response.users[index].emailVerification;
          users[index].preference = response.users[index].prefs;
        }
        return res.status(200).send({ users });
      },
      function (error) {
        console.log(error);
        return res.status(500).json({ error: error.response.message });
      }
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getUserById,
  searchUser,
};
