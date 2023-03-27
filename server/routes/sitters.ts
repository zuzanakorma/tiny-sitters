import Router from "express";
import cors from "cors";
import getSitters from "../sittersDb/db";

const router = Router();

router.get("/",async (req, res) => {
  const sitters = await getSitters();
  res.json(sitters)
});
export default router;
