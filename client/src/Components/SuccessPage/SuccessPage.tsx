import React from 'react'
import './successPage.scss';
import { useNavigate } from "react-router-dom";
import { AuthUser, insertedBooking } from '../../../../types';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import api from '../../Api/api';
import { clear } from '../store';


const SuccessPage: React.FC = () => {
  const booking: insertedBooking = useSelector((state: any) => state.booking);
  const user: AuthUser = useSelector((state: any) => state.user);
  const { userId, userEmail } = user;


  const dispatch = useDispatch(); 
  const navigate = useNavigate();


  const completedBooking: insertedBooking = {
    ...booking, 
    _id: uuidv4(),
    userId: userId,
    userEmail: userEmail,
  }

  api.post('api/bookings', completedBooking).then((response)=> {
    console.log("HERE", response.data)
  })

  
  const backToHome = () => {
    dispatch(clear());
    setTimeout(() => navigate("/"), 3000);
  }

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
        <button className='backbtn' onClick={backToHome}>We will redirect you to our homepage.</button>
      </div>
    </>
  )
}

export default SuccessPage;
