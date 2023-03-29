import Router from 'express';
import { getAvailableSitters, getSitterById, updateSitterBookings} from '../sittersDb/db';

const router = Router();

// router.get('/', async (req, res) => {
//   const sitters = await getAvailableSitters();
//   res.json(sitters);
// });

router.get('/available/:date', async (req, res) => {
  const {date} = req.params
  const sitters = await getAvailableSitters(date);
  res.json(sitters);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const sitter = await getSitterById(id);
  res.json(sitter);
  console.log(sitter);
});

// router.patch('/update/:id', async (req, res) => {
//   const id = req.params.id;
//   const {date} = req.body;
//   const sitter = await updateSitterBookings(id,date);
//    return res
//    .set('Content-Type', 'application/json')
//    .status(200)
//    .json(sitter);
//   // console.log(date);
// });

export default router;
