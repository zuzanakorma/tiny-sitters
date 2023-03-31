import Signout from "../Auth/Signout";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Header from "../Header/Header";
import background from "../../Assets/bg.svg";
import "react-datepicker/dist/react-datepicker.css";
import api from "../../Api/api";
import './calendar.scss';
import { Link } from "react-router-dom";
import Sitters from "../Sitters/Sitters";

export default function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  const [sitter, setSitter] = useState([]);

  async function calendar(){
    const response = await api.get(`/api/sitters/available/${startDate.toISOString()}`)
    setSitter(response.data)
    console.log(sitter)
  }

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
        {/* <h2>Available Sitter</h2>
        {sitter.map((p: any) => p.name)} */}
        
        <Signout />
        
      </div>
    </>
  );
}