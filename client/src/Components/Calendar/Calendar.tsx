import Signout from "../Auth/Signout";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Header from "../Header/Header";
import background from "../../Assets/bg.svg";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation } from "react-router-dom";
import './calendar.scss';
import { Link } from "react-router-dom";
import Profile from "../Profile/Profile";

type AuthUser = {
  email: undefined | string;
};

export default function Calendar() {
  const location = useLocation();
  const authUserParam = location.search ? new URLSearchParams(location.search).get("authUser") : null;
  const authUser = authUserParam && JSON.parse(decodeURIComponent(authUserParam)) as AuthUser;
  const email = authUser ? authUser.email : null;
  const [startDate, setStartDate] = useState(new Date());

  function handleChange(value: Date | null) {
    if (value) {
      setStartDate(value);
    }
  }

  return (
    <>
      <div
        className="mainpage"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Header />
        <h2> DatePicker</h2>
        <div className="picker">
          <DatePicker
            showTimeSelect
            selected={startDate}
            onChange={(value) => handleChange(value)}
            timeIntervals={60}
            timeFormat="HH:mm"
            dateFormat="dd-MM-yyyy HH:mm"
            inline
          />
          <Link className="next-btn" to="/sitters" state={{startDate: startDate.toISOString()}}>Next
           {/* <div className='next-btn' onClick={calendar}>Next</div> */}
          </Link>
        </div>

        <Link className="next-btn" to="/profile" state={{email: email}}>Profile
           {/* <div className='next-btn' onClick={calendar}>Next</div> */}
          </Link>
        
        <Signout />
        
      </div>
    </>
  );
}