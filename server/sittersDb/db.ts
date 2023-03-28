import client from "../db/client";
import * as mongoDB from 'mongodb';


const getSitters = async ()=>{
   await client.connect()
   const db: mongoDB.Db = client.db('tinysitters');
   const col: mongoDB.Collection = db.collection('sitters');
   const sitter = await col.find({}).toArray();

   console.log(`this is my sitter: ${JSON.stringify(sitter, null, 2)}`)
  return sitter;
}

const getSitterById = async (id:string)=>{
   await client.connect()
   const ObjectId = require("mongoDb").ObjectId;
   const myObjectId = new ObjectId(id)
   const db: mongoDB.Db = client.db('tinysitters');
   const col: mongoDB.Collection = db.collection('sitters');
   const sitter = await col.findOne({_id: myObjectId})

   console.log(`this is my sitter by id: ${JSON.stringify(sitter, null, 2)}`)
   console.log(sitter);
  return sitter;
}

export {getSitters, getSitterById};