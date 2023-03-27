import * as mongoDB from "mongodb";
require('dotenv').config();

const uri = process.env.MONGO_URI;


    const client: mongoDB.MongoClient = new mongoDB.MongoClient(`${uri}`, {
          // useNewUrlParser: true,
          // useUnifiedTopology: true,
          // poolSize: 2,
        });
        // await client.connect();

export default client;