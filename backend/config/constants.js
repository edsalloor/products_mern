import dotenv from "dotenv";
dotenv.config();

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

export const MONGO_URI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@fullstackwebdevelopment.0ue2g.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=FullStackWebDevelopment`;
export const PORT = 5000;
