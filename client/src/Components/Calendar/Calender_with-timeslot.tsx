import Signout from "../Auth/Signout";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Header from "../Header/Header";
import background from "../../Assets/bg.svg";
import "react-datepicker/dist/react-datepicker.css";
import api from "../../Api/api";
import './calendar.scss';
import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes'
import Timepicker from './Timepicker'
import { subDays, addMonths } from 'date-fns';

export default function Calendar() {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 12)
  );

  const [sitter, setSitter] = useState([]);

  async function calendar(){
    const response = await api.get(`/api/sitters/available/${startDate.toISOString()}`)
    setSitter(response.data)
    console.log(sitter)
  }

  // const isWeekday = (date) => {
  //   const day = getDay(date);
  //   return day !== 0 && day !== 6;
  // };

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
            selected={startDate}
            startDate={startDate}
            onChange={(value) => handleChange(value)}
            minDate={new Date()}
            maxDate={addMonths(new Date(), 3)}
            excludeDates={[new Date(), subDays(new Date(), 0)]}
            placeholderText="Select a date other than today or yesterday"
            showDisabledMonthNavigation
            inline
          />
           <Timepicker />
          
        <div className='next-btn' onClick={calendar}>Next</div>
        </div>
       

        <h2>Available Sitter</h2>
        {sitter.map((p: any) => p.name)}
        <Signout />
        </div>
     
    </>
  );
}
