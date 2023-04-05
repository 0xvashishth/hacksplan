const appwrite = require("../../appwrite/appwrite-config");
const database_experiences = process.env.database_experiences;
const collection_experience = process.env.collection_experience;

const deleteExperience = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return res.status(422).json({ error: "Id is not defined!" });
  }
  try {
    appwrite.databases
      .deleteDocument(database_experiences, collection_experience, id)
      .then(
        function (response) {
          return res.status(200).send({ "message": "Experience successfully deleted!" });
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
  deleteExperience,
};
