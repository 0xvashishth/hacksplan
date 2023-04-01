const appwrite = require("../../appwrite/appwrite-config");
const { ID, Query } = require("node-appwrite");

const createDatabase = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(422).json({ error: "Name is not provided!" });
  }
  try {
    appwrite.databases.create(ID.unique(), name).then(
      function (response) {
        return res.status(200).send({ response });
      },
      function (error) {
        console.log(error.response.message);
        return res.status(500).json({ error: error.response.message });
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Server Error!" });
  }
};

const updateDatabase = (req, res, next) => {
  const { id, name } = req.body;
  if (!name || !id) {
    return res.status(422).json({ error: "Name is not provided!" });
  }
  try {
    appwrite.databases.update(id, name).then(
      function (response) {
        return res.status(200).send({ response });
      },
      function (error) {
        console.log(error.response.message);
        return res.status(500).json({ error: error.response.message });
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Server Error!" });
  }
};

const listDatabase = (req, res, next) => {
  try {
    appwrite.databases.list().then(
      function (response) {
        return res.status(200).send({ response });
      },
      function (error) {
        console.log(error.response.message);
        return res.status(500).json({ error: error.response.message });
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Server Error!" });
  }
};

const deleteDatabase = (req, res, next) => {
  const { id } = req.body;
  if (!id) {
    return res.status(422).json({ error: "Name is not provided!" });
  }
  try {
    appwrite.databases.delete(id).then(
      function (response) {
        return res
          .status(204)
          .send({ message: "Database Deleted Successfully!" });
      },
      function (error) {
        console.log(error.response.message);
        return res.status(500).json({ error: error.response.message });
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Server Error!" });
  }
};


module.exports = {listDatabase, updateDatabase, deleteDatabase, createDatabase}