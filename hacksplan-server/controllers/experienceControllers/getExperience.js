const appwrite = require("../../appwrite/appwrite-config");
const { Query } = require("node-appwrite");
const database_experiences = process.env.database_experiences;
const collection_experience = process.env.collection_experience;

const getExperience = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return res.status(422).json({ error: "Id is not defined!" });
  }
  try {
    appwrite.databases
      .getDocument(database_experiences, collection_experience, id)
      .then(
        function (response) {
          delete response.$permissions;
          delete response.$collectionId;
          delete response.$updatedAt;
          delete response.$databaseId;
          delete response.$updatedAt;
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
};

const searchExperience = async (req, res, next) => {
  var { keyword } = req.body;
  if (!keyword) {
    keyword = [];
  } else {
    keyword = [Query.search("title", keyword)];
  }
  try {
    appwrite.databases
      .listDocuments(database_experiences, collection_experience, keyword)
      .then(
        function (response) {
          for (let index = 0; index < response.total; index++) {
            delete response.documents[index].$updatedAt;
            delete response.documents[index].$collectionId;
            delete response.documents[index].$databaseId;
            delete response.documents[index].$permissions;
          }
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
};

module.exports = {
  getExperience,
  searchExperience,
};
