const appwrite = require("../../appwrite/appwrite-config");
const database_community = process.env.database_communities;
const collection_community = process.env.collection_community;

const deleteCommunity = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return res.status(422).json({ error: "Id is not defined!" });
  }
  try {
    appwrite.databases
      .deleteDocument(database_community, collection_community, id)
      .then(
        function (response) {
          return res.status(200).send({ "message": "Community successfully deleted!" });
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
  deleteCommunity,
};
