import Router from 'express';
import { getAvailableSitters, getSitterById, updateSitterBookings, getSitterFromFirebase} from '../sittersDb/db';

const router = Router();

router.get('/available/:date', async (req, res) => {
  const {date} = req.params
  // console.log(req.query.test)
  const sitters = await getAvailableSitters(date);
  res.json(sitters);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const sitter = await getSitterById(id);
  res.json(sitter);
  console.log("here",sitter);
});

router.patch('/:id', async (req, res) => {
  const id = req.params.id;
  const date: string= req.body.date;
  const sitter = await updateSitterBookings(id,date);
   return res
   .set('Content-Type', 'application/json')
   .status(200)
   .json(sitter);

});

router.get('/user/:email', async (req, res) => {
  const email = req.params.email;
  const sitter = await getSitterFromFirebase(email);
  res.json(sitter);
});


//email testing


export default router;
