import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/sitters';

dotenv.config();
const app = express();

const port = process.env.PORT;
app.use(cors());
app.use('/api/sitters', router);
app.listen(port, () => console.log(`listening on port ${port}`));
export default app;
