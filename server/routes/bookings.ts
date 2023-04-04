import Router from 'express';
import {saveBookings} from '../sittersDb/db'
const bookings = Router();

bookings.post('/', async (req, res) => {
    const bookings = req.body;
    const booking = await saveBookings(bookings);
    res.json(booking);
  });

  export default bookings;