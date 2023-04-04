import Router from 'express';
import {saveBookings, getUserBookings } from '../sittersDb/db';

const bookings = Router();


bookings.get('/:userId', async (req, res) => {
  const userId = req.params.userId;
  const userBookings = await getUserBookings(userId);
  res.json(userBookings);
});

bookings.post('/', async (req, res) => {
    const bookings = req.body;
    const booking = await saveBookings(bookings);
    res.json(booking);
  });

  export default bookings;