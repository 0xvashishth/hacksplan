require('dotenv').config();
const { Client, Account, Users, Databases } = require('node-appwrite');

const APPWRITE_API_KEY = process.env.APPWRITE_API_KEY;
const APPWRITE_HOST = process.env.APPWRITE_HOST;
const APPWRITE_PROJECT_ID = process.env.APPWRITE_PROJECT_ID;

// Setting Up Appwrite
const client = new Client()
    .setEndpoint(APPWRITE_HOST)
    .setProject(APPWRITE_PROJECT_ID)
    .setKey(APPWRITE_API_KEY);

const account = new Account(client);
const users = new Users(client);
const databases = new Databases(client);


module.exports = {account, users, databases};