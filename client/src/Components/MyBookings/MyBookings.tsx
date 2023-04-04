import Header from '../Header/Header';
import AuthDetails from '../AuthDetails';
import './mybookings.scss';
import { useSelector } from 'react-redux';
import { insertedBooking } from '../../../../types';
import api from "../../Api/api";
import { useEffect, useState } from 'react';

const MyBookings: React.FC = () => {
  const userId = useSelector((state: any)=> state.user.userId);
  const [bookings, setBookings] = useState<any[]>([]);
  
  const getBookings = async (userId: string) => {
    try { 
      const response = await api.get(`api/bookings/${userId}`);
      console.log("response.data:",response.data);
      const fetchedBookings = response.data;
      console.log(fetchedBookings);
      console.log("hiiiii",fetchedBookings.data.sitterName);
      console.log("hoooo",fetchedBookings.data.sitterName);
    
      setBookings(fetchedBookings);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {

    getBookings(userId);

  console.log(`Use this userId for the api call: ${userId}`);
  }, [userId]);

 return (
    <>
      <AuthDetails />
      <div className="graybg">
        <Header />
        <h2>My Bookings</h2>
        <div className="main__container">
          {bookings.map((booking) => (
            <div key={booking.data.bookingId}>
              <p>Booking ID: {booking.data.bookingId}</p>
              <p>Date of Booking: {booking.data.dateOfBooking}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyBookings;
