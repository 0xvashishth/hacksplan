const appwrite = require("../../appwrite/appwrite-config");
const database_experiences = process.env.database_experiences;
const collection_experience = process.env.collection_experience;

const updateExperience = async (req, res, next) => {
  const { id, title, imgId, summary, description, Link1, Link2 } = req.body;
  if (!title || !description || !id) {
    return res.status(422).json({ error: "All fields are required!" });
  }

  try {
    appwrite.databases
      .updateDocument(database_experiences, collection_experience, id, {
        title,
        imgId,
        summary,
        description,
        Link1,
        Link2,
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
  updateExperience,
};
