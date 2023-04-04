const appwrite = require("../../appwrite/appwrite-config");
const { ID, Query } = require("node-appwrite");
const database_sponsorships = process.env.database_sponsorships
const collection_company_sponsor = process.env.collection_company_sponsor

const createSponsorship = async (req, res, next) => {
  const {
    company_name,
    contact_email,
    contact_link,
    authorized_person_id,
    description,
    amount,
    currency,
    additional_note,
  } = req.body;
  console.log(req.body);
  if (
    !company_name ||
    !contact_email ||
    !contact_link ||
    !authorized_person_id ||
    !description ||
    !amount ||
    !currency ||
    !additional_note
  ) {
    return res.status(422).json({ error: "All fields are required!" });
  }

  try {
    appwrite.databases
      .createDocument(
        database_sponsorships,
        collection_company_sponsor,
        ID.unique(),
        {
          company_name,
          contact_email,
          contact_link,
          authorized_person_id,
          verification: false,
          description,
          amount,
          currency,
          additional_note,
        }
      )
      .then(
        function (response) {
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
  createSponsorship
};
