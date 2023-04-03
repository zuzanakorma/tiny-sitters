import Router from 'express';
import { getAvailableSitters, getSitterById, updateSitterBookings, getSitterFromFirebase} from '../sittersDb/db';

import mailjet from 'node-mailjet';




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

router.get('/', async (req, res) => {
  res.send("hello World");
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



// router.get('/user/:email', async (req, res) => {
//   const email = req.params.email;
//   const sitter = await getSitterFromFirebase(email);
//   res.json(sitter);
// });


//email testing
router.post('/send-email', async (req, res) => {
  const mailjetClient = mailjet.connect(
      'df92719b746ff069f82809f61a4b6c61',
      '770bb486a9f9e86a695711bbd1c80151'
    );
    
const { email } = req.body;
if (!email) {
  return res.status(400).json({ error: 'Email is required' });
}

const request = mailjetClient.post('send', { version: 'v3.1' }).request({
  Messages: [
    {
      From: {
        Email: 'elpachris.obeng@appliedtechnology.se',
        Name: 'Tinny Sitters',
      },
      To: [
        {
          Email: email,
        },
      ],
      Subject: 'Booking Confirmation',
      TextPart: 'Testing Testing',
      HTMLPart:
        "<h3>Thank you for booking a sitter <a href='localhost/3000/sitters'>TinnySitters</a>!</h3><br/>!",
      CustomID: 'Tinny Sitters',
    },
  ],
});

try {
  const result = await request;
  console.log(result.body);
  console.log("hello")
  res.json({ message: 'Email sent successfully' });
} catch (err:any) {
  console.error(err);
  res.status(err.statusCode || 500).json({ error: err.message });
}
});




export default router;
