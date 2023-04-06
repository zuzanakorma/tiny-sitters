import Router from 'express';
import mailjet from 'node-mailjet';
import { getAvailableSitters, getSitterById, updateSitterBookings } from '../sittersDb/db';
import { insertBooking } from '../../types';

const router = Router();

// router.get('/available', async (_req, res) => {
//   const sitters = await getAvailableSitters();
//   res.json(sitters);
// });

router.get('/available', async (req, res) => {
  const {
    dateOfBooking,
    startTime,
    endTime,
    dayNameOfBooking,
  } = req.query as insertBooking;
  const sitters = await getAvailableSitters(dateOfBooking, startTime, endTime, dayNameOfBooking);
  res.json(sitters);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const sitter = await getSitterById(id);
  res.json(sitter);
  console.log('here', sitter);
});

router.get('/', async (_req, res) => {
  res.send('hello World');
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

// eslint-disable-next-line consistent-return
router.post('/send-email', async (req, res) => {
  const mailjetClient = mailjet.connect(
    'df92719b746ff069f82809f61a4b6c61',
    '770bb486a9f9e86a695711bbd1c80151',
  );

  const { email, bookingId } = req.body;
  if (!email || !bookingId) {
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
        `<h3>Thank you for booking a sitter. Your booking Id is:${bookingId} TinnySitters®</h3>`,
        CustomID: 'Tinny Sitters',
      },
    ],
  });

  try {
    const result = await request;
    console.log(result.body);
    console.log('hello');
    res.json({ message: 'Email sent successfully' });
  } catch (err:any) {
    console.error(err);
    return res.status(err.statusCode || 500).json({ error: err.message });
  }
});

export default router;
