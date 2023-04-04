const appwrite = require("../../appwrite/appwrite-config");
const { ID } = require("node-appwrite");
const database_community = process.env.database_communities;
const collection_community = process.env.collection_community;

const createExperience = async (req, res, next) => {
  const {
    community_name,
    contact_email,
    contact_link,
    authorized_person_id,
    description,
    additional_info,
    community_strength,
  } = req.body;

  if (
    !community_name ||
    !contact_email ||
    !contact_link ||
    !authorized_person_id ||
    !description
  ) {
    return res.status(422).json({ error: "All fields are required!" });
  }

  try {
    appwrite.databases
      .createDocument(database_community, collection_community, ID.unique(), {
        community_name,
        contact_email,
        contact_link,
        authorized_person_id,
        description,
        additional_info,
        community_strength,
        verification: false,
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
  createExperience,
};
