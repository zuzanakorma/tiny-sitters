import * as mongoDB from 'mongodb';

require('dotenv').config();

const uri = process.env.MONGO_URI;
const client: mongoDB.MongoClient = new mongoDB.MongoClient(`${uri}`);

export default client;
