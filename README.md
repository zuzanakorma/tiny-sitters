# Tiny Sitter

## Contributors
- Prabodhi Dissanayake
- Elton Kornmann
- El-Pachris Obeng
- Zuzana Kormancova

## Technologies

This project is based on MERN with TypeScript:

- MongoDB
- ExpressJS
- React
- NodeJS

This project has 4 dependencies:

- [MongoDB](https://www.mongodb.com/cloud/atlas/register) for the database. You can create an account (free) and get your online database.
- [Firebase](https://firebase.google.com/) for authentication of the users. You can create an account (free).
- [PayPal](https://developer.paypal.com/) for developers. You can create an account (free) and use credentials ...@personal.example.com and password in your application
- [Gmail](https://accounts.google.com/) to send email confirmations to application users. You can create an account (free) and add credentials: user email and password to .env file. Note: you have to enable 2-Step verification and afterwards create an application token (the password to use)

## How to run it

This application uses Docker containers for the backend database, MongoDB.

* Clone this repo.

   ```console
   git clone https://github.com/zuzanakorma/tiny-sitters.git
   ```

### MongoDB

1. MongoDB default configuration can be found on `server/dockerConfig/mongodb.env` and `server/dockerConfig/createUser.js`. If you update the default values, take note of them since you'll need them later.

1. Open a terminal

1. Move to directory `server` and start the MongoDB container

   ```console
   cd server && npm run docker:start
   ```

### Backend

1. Open a new terminal

1. Move to directory `server`

   ```console
   cd server
   ```

1. Rename `.env.example` to `.env` and add your details for the MongoDB connection string, database name, and Gmail credentials.

   ```console
   mv .env.example .env
   ```

   ```text
   PORT=8000
   MONGO_URI=mongodb://admin:admin123@localhost:27017/tinysitters
   PRESEED=False
   EMAIL_SERVER=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=myemail@gmail.com
   EMAIL_PASSWORD=my2stepsAppToken
   ```

    ---
    Optional: **Prepopulating data for test purposes**

    If you wish to have some prepopulated data in your database:

    1. Set `PRESEED` to `True` before starting the backend. Be aware `this flag is destructive`, it will delete any existing data in your database.

    1. After you have started the backend server, set `PRESEED` back to `False` to keep any new data you generate.
    ---

1. Run the commands

   ```console
   npm install && npm start
   ```

1. Check the backend service is running

   http://localhost:8000

1. Make sure the application keeps running in case you close the terminal

### Frontend

1. Open a new terminal

1. Move to directory `client`

   ```console
   cd client
   ```

1. Run the commands

   ```console
   npm install && npm start
   ```

1. Make sure the application keeps running in case you close the terminal

## How to access the application

Visit: http://localhost:3000

## Clean up
