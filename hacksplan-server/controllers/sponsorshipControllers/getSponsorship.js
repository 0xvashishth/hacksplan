const appwrite = require("../../appwrite/appwrite-config");
const { Query } = require("node-appwrite");
const database_sponsorships = process.env.database_sponsorships;
const collection_company_sponsor = process.env.collection_company_sponsor;

const getSponsorship = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return res.status(422).json({ error: "Id is not defined!" });
  }
  try {
    appwrite.databases
      .getDocument(database_sponsorships, collection_company_sponsor, id)
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

const searchSponsorship = async (req, res, next) => {
  var { keyword } = req.body;
  if (!keyword) {
    keyword = [];
  } else {
    keyword = [Query.search("company_name", keyword)];
  }
  try {
    appwrite.databases
      .listDocuments(database_sponsorships, collection_company_sponsor, keyword)
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
  getSponsorship,
  searchSponsorship,
};
