import Signout from "../Auth/Signout";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Header from "../Header/Header";
import background from "../../Assets/bg.svg";
import "react-datepicker/dist/react-datepicker.css";
import api from "../../Api/api";
import './calendar.scss';
import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes'

export default function Calendar() {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 12)
  );
  const [endDate, setEndDate] = useState(new Date());
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

  function setSlot(value: Date | null) {
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
            startDate={startDate}
            endDate={endDate}
            onChange={(value) => handleChange(value)}
            minTime={setHours(setMinutes(new Date(), 30), 8)}
            maxTime={setHours(setMinutes(new Date(), 30), 23)}
            timeIntervals={30}
            timeFormat="HH:mm"
            dateFormat="dd-MM-yyyy HH:mm"
            calendarClassName="rastastripes"
            timeCaption="Select time"
            inline
            // filterDate={isWeekday}
          />

        <div className='next-btn' onClick={calendar}>Next</div>
        </div>
        <h2>Available Sitter</h2>
        {sitter.map((p: any) => p.name)}
        <Signout />
      </div>
    </>
  );
}
