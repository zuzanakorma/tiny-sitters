import Router from 'express';
import { getAvailableSitters, getSitterById, updateSitterBookings } from '../sittersDb/db';

const router = Router();

router.get('/available', async (_req, res) => {
  const sitters = await getAvailableSitters();
  res.json(sitters);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const sitter = await getSitterById(id);
  res.json(sitter);
  console.log('here', sitter);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { date } = req.body;
  const sitter = await updateSitterBookings(id, date);
  return res
    .set('Content-Type', 'application/json')
    .status(200)
    .json(sitter);
});

// email testing

export default router;
