const appwrite = require("../../appwrite/appwrite-config");
const { ID, Query } = require("node-appwrite");

const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return res.status(422).json({ error: "Id is not recognized!" });
  }
  try {
    appwrite.users.delete(id).then(
      function (response) {
        return res.status(204).send({ message: "User Deleted Successfully!" });
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

const deleteSession = async (req, res, next) => {
  const { id, sessionid } = req.body;
  if (!id || !sessionid) {
    return res.status(422).json({ error: "Id is not recognized!" });
  }
  try {
    // we can provide additional queries if we have any...
    appwrite.users.deleteSession(id, sessionid).then(
      function (response) {
        return res.status(204).send({ message: "User Session Deleted Successfully!" });
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

const deleteAllSession = async (req, res, next) => {
    const { id } = req.body;
    if (!id) {
      return res.status(422).json({ error: "Id is not recognized!" });
    }
    try {
      // we can provide additional queries if we have any...
      appwrite.users.deleteSessions(id).then(
        function (response) {
          return res.status(204).send({ message: "All User Session Deleted Successfully!" });
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
  deleteUser,
  deleteSession,
  deleteAllSession
};
