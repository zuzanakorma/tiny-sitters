import express from "express";
import dotenv from "dotenv";
import router from "./routes/sitters";
import cors from "cors";

dotenv.config();
const app = express();

const port = process.env.PORT;
app.use(cors());
app.use("/api/sitters", router);
app.listen(port, () => console.log(`listening on port ${port}`));
export default app;
