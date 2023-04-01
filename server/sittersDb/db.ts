import * as mongoDB from 'mongodb';
import client from '../db/client';

const data = require('../db/preSeedData.json');

const getAvailableSitters = async () => {
  await client.connect();
  const db: mongoDB.Db = client.db('tinysitters');
  const col: mongoDB.Collection = db.collection('sitters');
  const sitter = await col.find({}).toArray();
  return sitter;
};

const getSitterById = async (id:string) => {
  await client.connect();
  const db: mongoDB.Db = client.db('tinysitters');
  const col: mongoDB.Collection = db.collection('sitters');
  const sitter = await col.findOne({ id });
  return sitter;
};

const updateSitterBookings = async (id:string, date:string) => {
  await client.connect();
  const db: mongoDB.Db = client.db('tinysitters');
  const col: mongoDB.Collection = db.collection('sitters');
  const updateSitter = await col.updateOne({ id }, { $push: { bookings: date } });
  console.log('updated', updateSitter);
  return updateSitter;
};

const preSeedData = async () => {
  await client.connect();
  const db: mongoDB.Db = client.db('tinysitters');
  const col: mongoDB.Collection = db.collection('sitters');
  col.deleteMany();
  col.insertMany(data);
};

export {
  getAvailableSitters,
  getSitterById,
  updateSitterBookings,
  preSeedData,
};
