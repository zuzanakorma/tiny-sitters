import Router from 'express';
import {saveBookings} from '../sittersDb/db'
const bookings = Router();

bookings.post('/', async (req, res) => {
    const bookings = req.body;
    const sitter = await saveBookings(bookings);
    res.json(sitter);
  });

  export default bookings;