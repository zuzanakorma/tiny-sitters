import Router from 'express';
import { getSitterFromFirebase } from '../sittersDb/db';

const users = Router();

users.get('/:email', async (req, res) => {
  const { email } = req.params;
  const sitter = await getSitterFromFirebase(email);
  res.json(sitter);
});

export default users;
