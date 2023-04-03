import React, { useState, Fragment, SetStateAction } from 'react';
import DatePicker from 'react-datepicker';
import Header from '../Header/Header';
import background from '../../Assets/bg.svg';
import 'react-datepicker/dist/react-datepicker.css';
import './calendar.scss';
import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes'
import { subDays, addMonths } from 'date-fns';
import moment from 'moment';
import TimeRange from 'react-time-range';
import { Link } from 'react-router-dom';
import AuthDetails from '../AuthDetails';
import { Reservation } from '../../../../types';

export default function Calendar() {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 12)
  );


function handleChange(value: Date | null) {
    if (value) {
      setStartDate(value);
      console.log(value);
    }
  }

const pickupTimeEarliest = moment()
  .startOf('day')
  .add(30, 'minutes')
  .format();
const pickupTimeLatest = moment()
  .endOf('day')
  .subtract(30, 'minutes')
  .format();


  // eslint-disable-next-line @typescript-eslint/no-unused-vars
const [startTime, setStartTime] = useState(pickupTimeEarliest);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
const [endTime, setEndTime] = useState(pickupTimeLatest);
const start = (event: { startTime: SetStateAction<string>; }) => setStartTime(event.startTime);
const end = (event: { endTime: SetStateAction<string>; }) => setEndTime(event.endTime);

console.log({ moment: moment().startOf('day').format() });

const selectedDate: Reservation = { 
  dateOfBooking: moment(startDate).format('DD-MM-YYYY'),
  startTime: moment(startTime).format('HH:mm'),
  endTime: moment(endTime).format('HH:mm'),
  dayNameOfBooking: moment(startDate).format('dddd'),
};

 
  return (
    <>  
       <AuthDetails />
       <div className='mainpage' style={{ backgroundImage: `url(${background})` }}>
        <Header />
        <h2> DatePicker</h2>
        <div className='picker'>
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
          <Fragment>

          <TimeRange
            onStartTimeChange={start}
            onEndTimeChange={end}
            startMoment={startTime}
            endMoment={endTime}
            minuteIncrement={30}
            startLabel={null}
            endLabel={null}
            use24Hours={true}
          />
         </Fragment>
         <Link to="/sitters" state={selectedDate} className='next-btn'>Next</Link>       
       </div>

        </div>


 
      
        
       
    </>
  );
}
