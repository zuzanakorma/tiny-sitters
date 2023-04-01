import React from 'react'
import './successPage.scss';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const SuccessPage: React.FC = () => {
  const location = useLocation();
  const booking = location.state.booking;
  const orderID = location.state.orderID;


  
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  }
  return (
    <>
    <h1>Payment Successfull</h1>

  <div className="success-checkmark">
   <div className="check-icon">
    <span className="icon-line line-tip"></span>
    <span className="icon-line line-long"></span>
    <div className="icon-circle"></div>
    <div className="icon-fix"></div>
   </div>
  </div>

    <div className='successPage'>
        <p>{ booking }Thank You for your: { orderID } Booking!</p>
        <p>We will send you a confirmation email soon.</p>
        You can see your bookings here:   
        <button className='backbtn' onClick={backToHome}>Go back to Home page</button>
    </div>

    </>
  )
}

export default SuccessPage;