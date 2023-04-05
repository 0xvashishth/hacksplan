const appwrite = require("../../appwrite/appwrite-config");
const { ID } = require("node-appwrite");
const database_experiences = process.env.database_experiences;
const collection_experience = process.env.collection_experience;

const createExperience = async (req, res, next) => {
  const {
    title,
    imgId,
    summary,
    authorized_person_id,
    description,
    Link1,
    Link2,
  } = req.body;

  if (
    !title ||
    !authorized_person_id ||
    !description
  ) {
    return res.status(422).json({ error: "Title & Description Fields are required!" });
  }

  try {
    appwrite.databases
      .createDocument(database_experiences, collection_experience, ID.unique(), {
        title,
        description,
        authorized_person_id,
        Link1,
        Link2,
        imgId,
        summary,
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
          console.log(error);
          return res.status(500).json({ error: error });
        }
      );
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createExperience,
};
