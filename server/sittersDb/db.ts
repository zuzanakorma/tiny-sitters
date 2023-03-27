import client from "../db/client";
import * as mongoDB from 'mongodb';


const getSitters = async ()=>{
   await client.connect()
   const db: mongoDB.Db = client.db('tinysitters');
   const col: mongoDB.Collection = db.collection('sitters');
   const sitter = await col.find({}).toArray();

   console.log(`this is my sitter: ${JSON.stringify(sitter, null, 2)}`)
  return sitter;
 await client.close();
}

export default getSitters;