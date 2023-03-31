import React from 'react'
import App from '../../App';
import './successPage.scss';
import { useNavigate } from "react-router-dom";

export default function SuccessPage() {
  const navigate = useNavigate();
  const backToHome = ()=>{
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
        <p>Thank You for your Booking!</p>
        <p>We will send You confirmation email soon.</p>   
        <button className='backbtn' onClick={backToHome}>Go back to Home page</button>
    </div>

    </>
  )
}
