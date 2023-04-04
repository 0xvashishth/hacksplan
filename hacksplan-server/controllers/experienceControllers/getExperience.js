const appwrite = require("../../appwrite/appwrite-config");
const { Query } = require("node-appwrite");
const database_community = process.env.database_communities;
const collection_community = process.env.collection_community;

const getExperience = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return res.status(422).json({ error: "Id is not defined!" });
  }
  try {
    appwrite.databases
      .getDocument(database_community, collection_community, id)
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
    keyword = [Query.search("community_name", keyword)];
  }
  try {
    appwrite.databases
      .listDocuments(database_community, collection_community, keyword)
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
