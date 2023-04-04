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
  const userDoc = querySnapshot.docs[0];
  return {
    username: userDoc.get('name'),
    email: userDoc.get('email'),
    address: userDoc.get('address')
  };
};

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

const saveBookings = async (data) => {
  await client.connect();
  const db: mongoDB.Db = client.db('tinysitters');
  const col: mongoDB.Collection = db.collection('bookings');
  const addBooking = await col.insertOne({ data });
  console.log('created booking', addBooking);
  return addBooking;
};

// {
//   _id: "",
//   userId: "",
//   userEmail: "", 
//   sitterId: "", 
//   sitterName: "", 
//   dateOfBooking: "", 
//   dayNameOfBooking: "", 
//   startTime: "", 
//   endTime: "", 
//   price: 0, 
// }

// has to be in ISO!!!
// "bookings": [
//   {
//     "from": "2023-04-18T19:30:00.000Z",
//     "to": "2023-04-18T21:30:00.000Z"
//   },
//   {
//     "from": "2023-04-21T19:30:00.000Z",
//     "to": "2023-04-21T21:30:00.000Z"
//   }]


// const getSitterBookings = async (data) => {
//   await client.connect();
//   const db: mongoDB.Db = client.db('tinysitters');
//   const col: mongoDB.Collection = db.collection('sitters');
// const from_date=ISODate('2023-04-21T09:30:00.000Z')
// const to_date=ISODate('2023-04-21T19:29:00.000Z')
//   const filterDates = col.find({
//   $and : [ {bookings : {$elemMatch : {
//     $or: [
//         { from: { $gte: to_date} },
//         { to: { $lte: from_date }}
//     ]
//   }}},  {bookings : { $not :  {$elemMatch : {
//     $or: [
//         { from: { $gte: from_date, $lte : to_date } },
//         { to: { $lte: to_date , $gte :  from_date}}
//     ]
//   }}  } }]
// })
// return filterDates;
// };

const preSeedData = async () => {
  await client.connect();
  const db: mongoDB.Db = client.db('tinysitters');
  const col: mongoDB.Collection = db.collection('sitters');
  col.deleteMany();
  col.insertMany(data);
};



export { getAvailableSitters, getSitterById, updateSitterBookings, preSeedData, getSitterFromFirebase ,saveBookings};

