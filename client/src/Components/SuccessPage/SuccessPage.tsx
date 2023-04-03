import React from 'react'
import './successPage.scss';
import { useNavigate } from "react-router-dom";
import { insertedBooking } from '../../../../types';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import api from '../../Api/api';


const SuccessPage: React.FC = () => {
  const booking: insertedBooking = useSelector((state: any) => state.booking);
  const price = booking.price;


  const completedBooking: insertedBooking = {
    ...booking, 
    _id: uuidv4(),
  }

  api.post('api/bookings',completedBooking).then((response)=>{
    console.log("HERE", response.data)
  })

  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
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
        <p>Thank you for your booking! The total price is {price}.</p>
        <p>We will send you a confirmation email soon.</p>
        <button className='backbtn' onClick={backToHome}>Go back to Home page</button>
      </div>
    </>
  )
}

export default SuccessPage;
