import Router from "express";
import cors from "cors";
import { getSitters, getSitterById } from "../sittersDb/db";


const router = Router();

router.get("/",async (req, res) => {
  const sitters = await getSitters();
  res.json(sitters)
});

router.get("/:id",async (req, res) => {
  const id = req.params.id;
  const sitter = await getSitterById(id)
  res.json(sitter)
  console.log(sitter)
});


export default router;
