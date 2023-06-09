import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/sitters';

import { preSeedData } from './sittersDb/db';
import users from './routes/user';
import bookings from "./routes/bookings";

dotenv.config();

if (process.env.PRESEED === 'True') {
  preSeedData();
}

const app = express();

const port = process.env.PORT;
app.use(express.json());
app.use(cors());
app.use('/api/sitters', router);
app.use('/api/user', users);
app.use('/api/bookings', bookings);
app.listen(port, () => console.log(`listening on port ${port}`));
export default app;
