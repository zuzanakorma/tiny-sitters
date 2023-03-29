import * as mongoDB from 'mongodb';
import client from '../db/client';

const getSitters = async (date) => {
  await client.connect();
  const db: mongoDB.Db = client.db('tinysitters');
  const col: mongoDB.Collection = db.collection('sitters');
  const sitter = await col.find({bookings: {$nin: [date]}}).toArray();

  console.log(`this is my sitter: ${JSON.stringify(sitter, null, 2)}`);
  return sitter;
};

const getSitterById = async (id:string) => {
  await client.connect();
  const myObjectId = new mongoDB.ObjectId(id);
  const db: mongoDB.Db = client.db('tinysitters');
  const col: mongoDB.Collection = db.collection('sitters');
  const sitter = await col.findOne({ _id: myObjectId });

  console.log(`this is my sitter by id: ${JSON.stringify(sitter, null, 2)}`);
  console.log(sitter);
  return sitter;
};

export { getSitters, getSitterById };
