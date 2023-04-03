import * as mongoDB from 'mongodb';

require('dotenv').config();

const uri ="mongodb://admin:admin123@localhost:27017/tinysitters";
const client: mongoDB.MongoClient = new mongoDB.MongoClient(`${uri}`);

export default client;
