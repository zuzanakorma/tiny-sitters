import * as mongoDB from 'mongodb';
import client from '../db/client';
const data = require('../db/preSeedData.json');
const admin = require('firebase-admin');
const serviceAccount = require('../fir-react-authentication-c2241-firebase-adminsdk-psqkv-655ed5a0cf.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://fir-react-authentication-c2241.firebaseio.com'
});

const database = admin.firestore();

const getSitterFromFirebase = async (email:any) => {
  const usersRef = database.collection('users');
  const querySnapshot = await usersRef.where('email', '==', email).get();

  if (querySnapshot.empty) {
    return null; // User not found
  }

  // We assume that there is only one document per user email
  const userDoc = querySnapshot.docs[0];
  return {
    username: userDoc.get('name'),
    email: userDoc.get('email'),
    address: userDoc.get('address')
  };
};

const getAvailableSitters = async (date) => {
  await client.connect();
  const db: mongoDB.Db = client.db('tinysitters');
  const col: mongoDB.Collection = db.collection('sitters');
  const sitter = await col.find({bookings: {$nin: [date]}}).toArray();
  return sitter;
};

const getSitterById = async (id:string) => {
  await client.connect();
  const db: mongoDB.Db = client.db('tinysitters');
  const col: mongoDB.Collection = db.collection('sitters');
  const sitter = await col.findOne({ id })
  return sitter;
};

const updateSitterBookings = async (id:string,date:string) => {
  await client.connect();
  const db: mongoDB.Db = client.db('tinysitters');
  const col: mongoDB.Collection = db.collection('sitters');
  const updateSitter =  await col.updateOne({ id},{$push:{bookings:date} });
  console.log("updated", updateSitter);
  return updateSitter;
  
};

const preSeedData = async () => {
  await client.connect();
  const db: mongoDB.Db = client.db('tinysitters');
  const col: mongoDB.Collection = db.collection('sitters');
  col.deleteMany()
  col.insertMany(data)
};




export { getAvailableSitters, getSitterById, updateSitterBookings, preSeedData, getSitterFromFirebase };
