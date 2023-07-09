const appwrite = require("../../appwrite/appwrite-config");
const database_community = process.env.database_communities;
const collection_community = process.env.collection_community;

const updateCommunity = async (req, res, next) => {
  const {
    id,
    community_name,
    contact_email,
    contact_link,
    description,
    additional_info,
    community_strength,
  } = req.body;
  if (!community_name || !contact_email || !contact_link || !description) {
    return res.status(422).json({ error: "All fields are required!" });
  }

  try {
    appwrite.databases
      .updateDocument(database_community, collection_community, id, {
        community_name,
        contact_email,
        contact_link,
        description,
        community_strength,
        additional_info,
      })
      .then(
        function (response) {
          delete response.$permissions;
          delete response.$collectionId;
          delete response.$updatedAt;
          delete response.$databaseId;
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
  updateCommunity,
};
