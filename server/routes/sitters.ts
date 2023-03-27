import Router from "express";
import cors from "cors";

const router = Router();

router.get("/", (req, res) => {
  res.send("hello from sitters");
});

export default router;
