import React, { useEffect }  from 'react'
import './successPage.scss';
import { useNavigate } from "react-router-dom";
import { AuthUser, insertedBooking } from '../../../../types';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import api from '../../Api/api';
import { clear } from '../store';


interface EmailData {
  email: string,
  bookingId: string
  }

const SuccessPage: React.FC = () => {

   //send email function
   const  sendEmailFunction = async (data:EmailData) =>{
    await api.post('api/sitters/send-email', data)
   .then((response) => {
      console.log('Response:', response.data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
   }

  const booking: insertedBooking = useSelector((state: any) => state.booking);
  const user: AuthUser = useSelector((state: any) => state.user);
  const { userId, userEmail } = user;


  const dispatch = useDispatch(); 
  const navigate = useNavigate();


  const completedBooking: insertedBooking = {
    ...booking, 
    bookingId: uuidv4(),
    userId: userId,
    userEmail: userEmail,
  }

 
  
  useEffect(() => {

    api.post('api/bookings', completedBooking).then((response)=> {
      console.log("HERE", response.data)
    })
    dispatch(clear());
    const { bookingId, userEmail } = completedBooking
    sendEmailFunction({email:userEmail, bookingId:bookingId});
    setTimeout(() => navigate("/"), 3000);
  });

console.log(booking.userEmail)
  return (
    <>
      <h1>Payment Successful</h1>
      <div className="success-checkmark">
        <div className="check-icon">
          <span className="icon-line line-tip"></span>
          <span className="icon-line line-long"></span>
          <div className="icon-circle"></div>
          <div className="icon-fix"></div>
        </div>
      </div>
      <div className="successPage">
        <p>Thank you for your booking!</p>
        <p>A confirmation email is sent to { userEmail } soon.</p>
      </div>
    </>
  )
}

export default SuccessPage;
